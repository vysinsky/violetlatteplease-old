import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import ReactGA from 'react-ga'

export const initLogRocket = (): void => {
  LogRocket.init(process.env.LOGROCKET_APP_ID)
  setupLogRocketReact(LogRocket)
  LogRocket.getSessionURL(function (sessionURL) {
    ReactGA.send({
      hitType: 'event',
      eventCategory: 'LogRocket',
      eventAction: sessionURL,
    })
  })
}
