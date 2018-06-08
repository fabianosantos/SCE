import { path } from 'ramda'

import config from '../../generated/config'

const brandDomain = path(['cookieDomain'], config)
const safeBrandDomain = brandDomain.replace(/\./g, '\\.')

const USER_SUCCESSFULY_AUTHENTICATED = 'USER_SUCCESSFULY_AUTHENTICATED'

const USER_AUTHENTICATION_FAILED = 'USER_AUTHENTICATION_FAILED'

const successfulyMessage = () => JSON.stringify({
  type: USER_SUCCESSFULY_AUTHENTICATED,
  success: true
})

const failMessage = ({ message }) => JSON.stringify({
  type: USER_AUTHENTICATION_FAILED,
  success: false,
  error: message
})

const isValidOrigin = origin => {
  try {
    const matchValidDomain = new RegExp(`^[^.]+${safeBrandDomain}`, 'i')
    const match = matchValidDomain.exec(origin)
    return match !== null

  } catch (error) {
    return false
  }
}

const send = message => {
  if (window.self !== window.top) {
    try {
      const origin = window.parent.location.origin

      if (isValidOrigin(origin)) {
        window.parent.postMessage(message, origin)
        console.log(`post-message [send]`, { message })

      } else {
        console.error(`post-message in send, invalid domain [${origin}]`)
      }

    } catch (error) {
      return false
    }
  }
}

export const startListener = listenerCallback => {
  try {
    window.addEventListener('message', listenerCallback, false)

  } catch (error) {
    console.error(`post-message in listen`, { error })
  }
}

export const sendSuccessfulyMessage = () => send(successfulyMessage())

export const sendFailMessage = error => send(failMessage(error))
