import { path } from 'ramda'
import { getCookie } from '../cookie'

let isMobile

const getIsMobileFromUserAgent = () => {
  try {
    const device = getCookie('device')
    const decoded = window.atob(device)
    const { type } = JSON.parse(decoded)

    // MOBILE, TABLET or DESKTOP
    return String(type).toUpperCase() === 'MOBILE'

  } catch (e) {
    // normalmente desktop não tem o cookie b2wDevice
    return false
  }
}

const getIsMobile = () => {
  if (isMobile === undefined) {
    if (path(['atob'], window)) {
      isMobile = getIsMobileFromUserAgent()
    } else {
      return getIsMobileFromUserAgent()
    }
  }
  return isMobile
}

export default getIsMobile
