function hasCustomEventSupport() {
  return typeof CustomEvent === 'function' || typeof CustomEvent === 'object'
}

function shouldLog() {
  return window.location && window.location.search.indexOf('log=true') >= 0
}

function mayLogEvent(event) {
  if (shouldLog()) {
    console.log('--- CUSTOM CAGE EVENT', event);
  }
}

export function dispatchMetric(eventType, data) {
  if (!hasCustomEventSupport()) {
    return;
  }

  const event = new CustomEvent(eventType, { detail: data })

  mayLogEvent(event)
  document.dispatchEvent(event)
}