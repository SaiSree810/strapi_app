/* eslint-disable check-file/filename-naming-convention */
import * as React from 'react';

import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
import { fixtures } from '@strapi/admin-test-utils';
import { darkTheme, lightTheme } from '@strapi/design-system';
import { NotificationsProvider, Permission, RBACContext } from '@strapi/helper-plugin';
import {
  fireEvent,
  renderHook as renderHookRTL,
  render as renderRTL,
  waitFor,
  RenderOptions as RTLRenderOptions,
  RenderResult,
  act,
  screen,
  RenderHookOptions,
  RenderHookResult,
  Queries,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { Provider } from 'react-redux';
import { MemoryRouterProps, RouterProvider, createMemoryRouter } from 'react-router-dom';

import { LanguageProvider } from '../src/components/LanguageProvider';
import { RBACReducer } from '../src/components/RBACProvider';
import { Theme } from '../src/components/Theme';
import { reducer as cmAppReducer } from '../src/content-manager/layout';
import { reducer as contentManagerReducer } from '../src/content-manager/modules/reducers';
import { contentManagerApi } from '../src/content-manager/services/api';
import { AuthProvider } from '../src/features/Auth';
import { _internalConfigurationContextProvider as ConfigurationContextProvider } from '../src/features/Configuration';
import { reducer as appReducer } from '../src/reducer';
import { adminApi } from '../src/services/api';

import { server } from './server';
import { initialState } from './store';

setLogger({
  log: () => {},
  warn: () => {},
  error: () => {},
});

interface ProvidersProps {
  children: React.ReactNode;
  initialEntries?: MemoryRouterProps['initialEntries'];
  storeConfig?: Partial<ConfigureStoreOptions>;
}

const defaultTestStoreConfig = {
  preloadedState: initialState,
  reducer: {
    [adminApi.reducerPath]: adminApi.reducer,
    admin_app: appReducer,
    rbacProvider: RBACReducer,
    'content-manager_app': cmAppReducer,
    [contentManagerApi.reducerPath]: contentManagerApi.reducer,
    'content-manager': contentManagerReducer,
  },
  // @ts-expect-error – this fails.
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      // Disable timing checks for test env
      immutableCheck: false,
      serializableCheck: false,
    }),
    adminApi.middleware,
    contentManagerApi.middleware,
  ],
};

const Providers = ({ children, initialEntries, storeConfig }: ProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const store = configureStore(
    // @ts-expect-error – we've not filled up the entire initial state.
    storeConfig ?? defaultTestStoreConfig
  );

  const router = createMemoryRouter(
    [
      {
        path: '/*',
        element: (
          <Provider store={store}>
            <AuthProvider>
              <QueryClientProvider client={queryClient}>
                <DndProvider backend={HTML5Backend}>
                  <LanguageProvider messages={{}}>
                    <Theme
                      themes={{
                        dark: darkTheme,
                        light: lightTheme,
                      }}
                    >
                      <NotificationsProvider>
                        <RBACContext.Provider
                          value={{
                            refetchPermissions: jest.fn(),
                            allPermissions: [
                              ...fixtures.permissions.allPermissions,
                              {
                                id: 314,
                                action: 'admin::users.read',
                                subject: null,
                                properties: {},
                                conditions: [],
                                actionParameters: {},
                              },
                            ] as Permission[],
                          }}
                        >
                          <ConfigurationContextProvider
                            showReleaseNotification={false}
                            showTutorials={false}
                            logos={{
                              auth: { default: '' },
                              menu: { default: '' },
                            }}
                            updateProjectSettings={jest.fn()}
                          >
                            {children}
                          </ConfigurationContextProvider>
                        </RBACContext.Provider>
                      </NotificationsProvider>
                    </Theme>
                  </LanguageProvider>
                </DndProvider>
              </QueryClientProvider>
            </AuthProvider>
          </Provider>
        ),
      },
    ],
    {
      initialEntries,
    }
  );

  // en is the default locale of the admin app.
  return <RouterProvider router={router} />;
};

// eslint-disable-next-line react/jsx-no-useless-fragment
const fallbackWrapper = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export interface RenderOptions {
  renderOptions?: RTLRenderOptions;
  userEventOptions?: Parameters<typeof userEvent.setup>[0];
  initialEntries?: MemoryRouterProps['initialEntries'];
  providerOptions?: {
    storeConfig?: Partial<ConfigureStoreOptions>;
  };
}

const render = (
  ui: React.ReactElement,
  { renderOptions, userEventOptions, initialEntries, providerOptions }: RenderOptions = {}
): RenderResult & { user: ReturnType<typeof userEvent.setup> } => {
  const { wrapper: Wrapper = fallbackWrapper, ...restOptions } = renderOptions ?? {};

  return {
    ...renderRTL(ui, {
      wrapper: ({ children }) => (
        <Providers initialEntries={initialEntries} {...providerOptions}>
          <Wrapper>{children}</Wrapper>
        </Providers>
      ),
      ...restOptions,
    }),
    user: userEvent.setup(userEventOptions),
  };
};

const renderHook = <
  Result,
  Props,
  Q extends Queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  hook: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props, Q, Container, BaseElement> &
    Pick<RenderOptions, 'initialEntries'>
): RenderHookResult<Result, Props> => {
  const { wrapper: Wrapper = fallbackWrapper, initialEntries, ...restOptions } = options ?? {};

  return renderHookRTL(hook, {
    wrapper: ({ children }) => (
      <Providers initialEntries={initialEntries}>
        <Wrapper>{children}</Wrapper>
      </Providers>
    ),
    ...restOptions,
  });
};

export { render, renderHook, waitFor, server, act, screen, fireEvent, defaultTestStoreConfig };
