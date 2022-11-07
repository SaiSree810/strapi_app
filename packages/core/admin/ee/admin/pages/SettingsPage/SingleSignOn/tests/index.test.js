import React from 'react';
import { act } from 'react-dom/test-utils';
import { getByLabelText, render, screen, waitFor } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider, lightTheme } from '@strapi/design-system';
import userEvent from '@testing-library/user-event';

import { useRBAC } from '@strapi/helper-plugin';
import server from './server';
import { SingleSignOn } from '../index';

jest.mock('@strapi/helper-plugin', () => ({
  ...jest.requireActual('@strapi/helper-plugin'),
  useTracking: jest.fn(() => ({ trackUsage: jest.fn() })),
  useNotification: jest.fn(),
  useOverlayBlocker: jest.fn(() => ({ lockApp: jest.fn(), unlockApp: jest.fn() })),
  useRBAC: jest.fn(),
  useFocusWhenNavigate: jest.fn(),
}));

const App = (
  <ThemeProvider theme={lightTheme}>
    <IntlProvider locale="en" messages={{}} textComponent="span">
      <SingleSignOn />
    </IntlProvider>
  </ThemeProvider>
);

describe('Admin | ee | SettingsPage | SSO', () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('renders and matches the snapshot', async () => {
    useRBAC.mockImplementation(() => ({
      isLoading: false,
      allowedActions: { canUpdate: true, canReadRoles: true },
    }));

    const {
      container: { firstChild },
    } = render(App);

    await waitFor(() =>
      expect(
        screen.getByText('Create new user on SSO login if no account exists')
      ).toBeInTheDocument()
    );

    expect(firstChild).toMatchInlineSnapshot(`
      .c27 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c2 {
        padding-bottom: 56px;
      }

      .c5 {
        background: #f6f6f9;
        padding-top: 40px;
        padding-right: 56px;
        padding-bottom: 40px;
        padding-left: 56px;
      }

      .c12 {
        padding-right: 8px;
      }

      .c16 {
        padding-right: 56px;
        padding-left: 56px;
      }

      .c17 {
        background: #ffffff;
        padding: 24px;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
      }

      .c28 {
        background: #f6f6f9;
        padding: 4px;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        border-color: #dcdce4;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .c30 {
        padding-right: 12px;
        padding-left: 12px;
        border-radius: 4px;
      }

      .c41 {
        padding-right: 16px;
        padding-left: 16px;
      }

      .c43 {
        padding-left: 12px;
      }

      .c6 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c7 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }

      .c18 {
        -webkit-align-items: stretch;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c31 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c9 {
        color: #32324d;
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.25;
      }

      .c14 {
        font-weight: 600;
        color: #32324d;
        font-size: 0.875rem;
        line-height: 1.43;
      }

      .c15 {
        color: #666687;
        font-size: 1rem;
        line-height: 1.5;
      }

      .c20 {
        color: #32324d;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.25;
      }

      .c25 {
        font-weight: 600;
        color: #32324d;
        font-size: 0.75rem;
        line-height: 1.33;
      }

      .c33 {
        font-weight: 600;
        color: #666687;
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1.33;
      }

      .c35 {
        font-weight: 600;
        color: #4945ff;
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1.33;
      }

      .c37 {
        color: #666687;
        font-size: 0.75rem;
        line-height: 1.33;
      }

      .c42 {
        color: #32324d;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.875rem;
        line-height: 1.43;
      }

      .c19 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c19 > * + * {
        margin-top: 16px;
      }

      .c24 > * {
        margin-top: 0;
        margin-bottom: 0;
      }

      .c24 > * + * {
        margin-top: 4px;
      }

      .c10 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
        background: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        outline: none;
      }

      .c10 svg {
        height: 12px;
        width: 12px;
      }

      .c10 svg > g,
      .c10 svg path {
        fill: #ffffff;
      }

      .c10[aria-disabled='true'] {
        pointer-events: none;
      }

      .c10:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c10:focus-visible {
        outline: none;
      }

      .c10:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c13 {
        height: 100%;
      }

      .c11 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 10px 16px;
        background: #4945ff;
        border: 1px solid #4945ff;
      }

      .c11 .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c11 .c8 {
        color: #ffffff;
      }

      .c11[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c11[aria-disabled='true'] .c8 {
        color: #666687;
      }

      .c11[aria-disabled='true'] svg > g,
      .c11[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c11[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c11[aria-disabled='true']:active .c8 {
        color: #666687;
      }

      .c11[aria-disabled='true']:active svg > g,
      .c11[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c11:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c11:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c11 svg > g,
      .c11 svg path {
        fill: #ffffff;
      }

      .c39 {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        background: transparent;
        border: none;
      }

      .c39:focus {
        outline: none;
      }

      .c39[aria-disabled='true'] {
        cursor: not-allowed;
      }

      .c38 {
        position: relative;
        border: 1px solid #dcdce4;
        padding-right: 12px;
        border-radius: 4px;
        background: #ffffff;
        overflow: hidden;
        min-height: 2.5rem;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
      }

      .c38:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c44 {
        background: transparent;
        border: none;
        position: relative;
        z-index: 1;
      }

      .c44 svg {
        height: 0.6875rem;
        width: 0.6875rem;
      }

      .c44 svg path {
        fill: #666687;
      }

      .c45 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background: none;
        border: none;
      }

      .c45 svg {
        width: 0.375rem;
      }

      .c40 {
        width: 100%;
      }

      .c26 {
        position: relative;
        display: inline-block;
        z-index: 0;
        width: 100%;
      }

      .c29 {
        overflow: hidden;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        outline: none;
        box-shadow: 0;
        -webkit-transition-property: border-color,box-shadow,fill;
        transition-property: border-color,box-shadow,fill;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
      }

      .c29:focus-within {
        border: 1px solid #4945ff;
        box-shadow: #4945ff 0px 0px 0px 2px;
      }

      .c32 {
        background-color: transparent;
        border: 1px solid #f6f6f9;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        z-index: 2;
        -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
        padding-top: 6px;
        padding-bottom: 6px;
      }

      .c34 {
        background-color: #ffffff;
        border: 1px solid #dcdce4;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        z-index: 2;
        -webkit-flex: 1 1 50%;
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
        padding-top: 6px;
        padding-bottom: 6px;
      }

      .c36 {
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        z-index: 1;
        width: 100%;
      }

      .c23 {
        max-width: 320px;
      }

      .c1 {
        display: grid;
        grid-template-columns: 1fr;
      }

      .c3 {
        overflow-x: hidden;
      }

      .c21 {
        display: grid;
        grid-template-columns: repeat(12,1fr);
        gap: 16px;
      }

      .c22 {
        grid-column: span 6;
        max-width: 100%;
      }

      .c4:focus-visible {
        outline: none;
      }

      @media (max-width:68.75rem) {
        .c22 {
          grid-column: span 12;
        }
      }

      @media (max-width:34.375rem) {
        .c22 {
          grid-column: span;
        }
      }

      <div
        class="c0 c1"
      >
        <div
          class="c0 c2 c3"
        >
          <main
            aria-labelledby="main-content-title"
            class="c4"
            id="main-content"
            tabindex="-1"
          >
            <form>
              <div
                style="height: 0px;"
              >
                <div
                  class="c0 c5"
                  data-strapi-header="true"
                >
                  <div
                    class="c0 c6"
                  >
                    <div
                      class="c0 c7"
                    >
                      <h1
                        class="c8 c9"
                      >
                        Single Sign-On
                      </h1>
                    </div>
                    <button
                      aria-disabled="true"
                      class="c10 c11"
                      data-testid="save-button"
                      disabled=""
                      type="submit"
                    >
                      <div
                        aria-hidden="true"
                        class="c0 c12 c13"
                      >
                        <svg
                          fill="none"
                          height="1em"
                          viewBox="0 0 24 24"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.727 2.97a.2.2 0 01.286 0l2.85 2.89a.2.2 0 010 .28L9.554 20.854a.2.2 0 01-.285 0l-9.13-9.243a.2.2 0 010-.281l2.85-2.892a.2.2 0 01.284 0l6.14 6.209L20.726 2.97z"
                            fill="#212134"
                          />
                        </svg>
                      </div>
                      <span
                        class="c8 c14"
                      >
                        Save
                      </span>
                    </button>
                  </div>
                  <p
                    class="c8 c15"
                  >
                    Configure the settings for the Single Sign-On feature.
                  </p>
                </div>
              </div>
              <div
                class="c0 c16"
              >
                <div
                  class="c0 c17 c18 c19"
                  spacing="4"
                >
                  <h2
                    class="c8 c20"
                  >
                    Settings
                  </h2>
                  <div
                    class="c0 c21"
                  >
                    <div
                      class="c22"
                    >
                      <div
                        class="c0 "
                      >
                        <div
                          class="c23"
                        >
                          <div
                            class="c0 c18 c24"
                            spacing="1"
                          >
                            <div
                              class="c0 c7"
                            >
                              <label
                                class="c8 c25"
                                for="toggleinput-1"
                              >
                                <div
                                  class="c0 c7"
                                >
                                  Auto-registration
                                </div>
                              </label>
                            </div>
                            <label
                              class="c26"
                            >
                              <div
                                class="c27"
                              >
                                Auto-registration
                              </div>
                              <div
                                class="c0 c28 c29"
                                display="flex"
                              >
                                <div
                                  aria-hidden="true"
                                  class="c0 c30 c31 c32"
                                >
                                  <span
                                    class="c8 c33"
                                  >
                                    Off
                                  </span>
                                </div>
                                <div
                                  aria-hidden="true"
                                  class="c0 c30 c31 c34"
                                >
                                  <span
                                    class="c8 c35"
                                  >
                                    On
                                  </span>
                                </div>
                                <input
                                  aria-disabled="false"
                                  aria-label="autoRegister"
                                  checked=""
                                  class="c36"
                                  data-testid="autoRegister"
                                  id="toggleinput-1"
                                  name="autoRegister"
                                  type="checkbox"
                                />
                              </div>
                            </label>
                            <p
                              class="c8 c37"
                              id="toggleinput-1-hint"
                            >
                              Create new user on SSO login if no account exists
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="c22"
                    >
                      <div
                        class="c0 "
                      >
                        <div>
                          <div
                            class="c0 c18 c24"
                            spacing="1"
                          >
                            <span
                              class="c8 c25"
                              for="select-2"
                              id="select-2-label"
                            >
                              <div
                                class="c0 c7"
                              >
                                Default role
                              </div>
                            </span>
                            <div
                              class="c0 c7 c38"
                            >
                              <button
                                aria-describedby="select-2-error"
                                aria-disabled="false"
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                aria-labelledby="select-2-label select-2-content"
                                class="c39"
                                id="select-2"
                                name="defaultRole"
                                type="button"
                              />
                              <div
                                class="c0 c6 c40"
                              >
                                <div
                                  class="c0 c7"
                                >
                                  <div
                                    class="c0 c41"
                                  >
                                    <span
                                      class="c8 c42"
                                      id="select-2-content"
                                    >
                                      Editor
                                    </span>
                                  </div>
                                </div>
                                <div
                                  class="c0 c7"
                                >
                                  <button
                                    aria-hidden="true"
                                    class="c0 c43 c44 c45"
                                    tabindex="-1"
                                    title="Carret Down Button"
                                    type="button"
                                  >
                                    <svg
                                      fill="none"
                                      height="1em"
                                      viewBox="0 0 14 8"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        clip-rule="evenodd"
                                        d="M14 .889a.86.86 0 01-.26.625L7.615 7.736A.834.834 0 017 8a.834.834 0 01-.615-.264L.26 1.514A.861.861 0 010 .889c0-.24.087-.45.26-.625A.834.834 0 01.875 0h12.25c.237 0 .442.088.615.264a.86.86 0 01.26.625z"
                                        fill="#32324D"
                                        fill-rule="evenodd"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <p
                              class="c8 c37"
                              id="select-2-hint"
                            >
                              It will attach the new authenticated user to the selected role
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    `);
  });

  it('should disable the form when there is no change', async () => {
    useRBAC.mockImplementation(() => ({
      isLoading: false,
      allowedActions: { canUpdate: true, canReadRoles: true },
    }));

    const { getByTestId } = render(App);

    await waitFor(() =>
      expect(
        screen.getByText('Create new user on SSO login if no account exists')
      ).toBeInTheDocument()
    );

    expect(getByTestId('save-button')).toHaveAttribute('aria-disabled');
  });

  it('should not disable the form when there is a change', async () => {
    useRBAC.mockImplementation(() => ({
      isLoading: false,
      allowedActions: { canUpdate: true, canReadRoles: true },
    }));

    const { container } = render(App);
    let el;

    await act(async () => {
      await waitFor(() => {
        el = getByLabelText(container, 'autoRegister');
      });
    });

    userEvent.click(el);

    expect(screen.getByTestId('save-button')).not.toBeDisabled();
  });
});
