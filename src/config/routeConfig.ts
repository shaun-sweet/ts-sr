export enum Paths {
  Root = '/',
  SuccessCallback = '/auth',
  // Anything below 'SaladRabbit' is considered nested by convention
  SaladRabbit = '/salad-rabbit',
  AccountView = '/sr/account/:accountId'
}

import { LandingPage, SuccessCallback } from 'features/Dropbox/containers'
import SaladRabbit from 'features/common/containers/SaladRabbit'
import * as React from 'react'

export interface RouteConfig {
  path: string,
  component: any, // not sure what type this needs to be... don't care either
  meta?: {}
}

export const routeConfig: RouteConfig[] = [
  { path: Paths.Root, component: LandingPage, meta: { exact: true } },
  { path: Paths.SuccessCallback, component: SuccessCallback },
  { path: Paths.SaladRabbit, component: SaladRabbit }
]
