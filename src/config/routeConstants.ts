export enum Routes {
  Root = '/',
  SuccessCallback = '/auth',
  // Anything below 'SaladRabbit' is considered nested by convention
  SaladRabbit = '/sr',
  AccountView = '/sr/account/:accountId'
}

// import { DBoxLandingPage, SuccessCallback } from '~features/Dropbox/pages'
// import SaladRabbitAuthedAppContainer from '~features/common/pages/SaladRabbitAuthedAppContainerPage/SaladRabbitAuthedAppContainerPage'
// import * as React from 'react'

// interface Route {
//   path: string,
//   component: React.Component
// }

// export const Routes: Route[] = [
//   { path: '/', component: DBoxLandingPage },
//   { path: '/auth', component: SuccessCallback },
//   { path: '/sr', component: SaladRabbitAuthedAppContainer }
// ]
