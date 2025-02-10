import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { AppStore, configuraStore, RootState } from '../store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function renderizaComProvider(
  elemento: ReactElement,
  {
    preloadedState = {},
    store = configuraStore(preloadedState),
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({
    children
  }: PropsWithChildren<Record<string, unknown>>): ReactElement {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(elemento, { wrapper: Wrapper, ...opcoesAdicionais })
  }
}
