import { parse } from 'qs'
import { path, curry } from 'ramda'

import config from '../generated/config'
import isPurchaseFlow from './utils/is-purchase-flow'

const homeUrl = path(['url', 'home'], config)
const pagamentoUrl = path(['url', 'pagamento'], config)
const loginUrl = path(['url', 'login'], config)
const location = path(['location'], window)

export const getAllQueryParams = () => {
  try {
    const query = parse(location.search.substring(1))
    if (query !== null && typeof(query) === 'object') {
      return query
    }
  } catch (e) {}

  return {}
}

export const isEmbedded = () => {
  const { embedded } = getAllQueryParams()
  return Boolean(embedded)
}

export const setHref = url => {
  try {
    if (url && typeof(url) === 'string') {
      location.href = url
    }
  } catch (e) {}
}

export const setFocusById = name => {
  if (name) {
    const secureName = String(name).replace(/\W/g,'')
    setHref(`#${secureName}`)
  }
}

function getDefaultPageUrl() {
  if (isPurchaseFlow()) {
    return pagamentoUrl
  }
  else {
    return homeUrl
  }
}

export const moveToNextOrDefaultPage = push => {
  const { next } = getAllQueryParams()
  const url = next ? next : getDefaultPageUrl()
  pushOrRedirect(push, { url })
}

export const moveToLoginToPurchaseFlux = push => {
  const url = `${loginUrl}&next=${pagamentoUrl}`
  pushOrRedirect(push, { url })
}

export const moveToNextOrPurchaseFlux = push => {
  const { next } = getAllQueryParams()
  const url = next ? next : pagamentoUrl
  pushOrRedirect(push, { url })
}

function isIE() {
  if (!navigator || !navigator.userAgent || typeof navigator.userAgent !== 'string') {
    return false
  }

  return navigator.userAgent.includes('Trident') || navigator.userAgent.includes('MSIE')
}

function prepareIERedirect(url) {
  if (url.match(/^http/)) {
    return url
  }
  else {
    return '/simple-login' + url
  }
}

export const pushOrRedirect = curry((pushFunction, { url, push: isPush }) => {
  if (isIE()) {
    setHref(prepareIERedirect(url))

  } else if (isPush && pushFunction) {
    pushFunction(url)

  } else {
    setHref(url)
  }
})
