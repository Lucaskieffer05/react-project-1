import { Events } from "./consts"

export function navigate (href){
    window.history.pushState({}, null, href)
    const navigationEvent = new Event(Events.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }
  