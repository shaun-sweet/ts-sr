import { LandingPage, SuccessCallback } from 'features/Dropbox/containers'
import SaladRabbit from 'features/common/containers/SaladRabbit'
import AccountsView from 'features/Accounts/containers/AccountsView'
import * as React from 'react'

export interface RouteConfig {
  path: string,
  component: any, // not sure what type this needs to be... don't care either
  meta?: {}
}
// once authed, this is the root path
export const SaladRabbitRootPath = '/salad-rabbit'

export const Paths = {
  Root: '/',
  SuccessCallback: '/auth',
  SaladRabbit: {
    AccountsView: `${SaladRabbitRootPath}/account/:accountId`
  }
}

export const rootRoutesConfig: RouteConfig[] = [
  { path: Paths.Root, component: LandingPage, meta: { exact: true } },
  { path: Paths.SuccessCallback, component: SuccessCallback },
  { path: SaladRabbitRootPath, component: SaladRabbit }
]

export const saladRabbitRoutesConfig: RouteConfig[] = [
  { path: Paths.SaladRabbit.AccountsView, component: AccountsView }
]
