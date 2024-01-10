import { IntlShape } from 'react-intl';

import { SanitizedAdminUser } from '../../../../../../../../shared/contracts/shared';
import { ComboboxFilter } from '../components/ComboboxFilter';

import { actionTypes, getDefaultMessage } from './getActionTypesDefaultMessages';

const customOperators = [
  {
    intlLabel: { id: 'components.FilterOptions.FILTER_TYPES.$eq', defaultMessage: 'is' },
    value: '$eq',
  },
  {
    intlLabel: { id: 'components.FilterOptions.FILTER_TYPES.$ne', defaultMessage: 'is not' },
    value: '$ne',
  },
];

export const getDisplayedFilters = ({
  formatMessage,
  users,
  canReadUsers,
}: {
  formatMessage: IntlShape['formatMessage'];
  users: SanitizedAdminUser[];
  canReadUsers: boolean;
}) => {
  // Default return of Object.keys function is string
  const actionOptions = (Object.keys(actionTypes) as (keyof typeof actionTypes)[]).map((action) => {
    return {
      label: formatMessage(
        {
          id: `Settings.permissions.auditLogs.${action}`,
          defaultMessage: getDefaultMessage(action),
        },
        { model: undefined }
      ),
      customValue: action,
    };
  });

  const filters = [
    {
      name: 'action',
      metadatas: {
        customOperators,
        label: formatMessage({
          id: 'Settings.permissions.auditLogs.action',
          defaultMessage: 'Action',
        }),
        customInput: ComboboxFilter,
        options: actionOptions,
      },
      fieldSchema: { type: 'enumeration' },
    },
    {
      name: 'date',
      metadatas: {
        label: formatMessage({
          id: 'Settings.permissions.auditLogs.date',
          defaultMessage: 'Date',
        }),
      },
      fieldSchema: { type: 'datetime' },
    },
  ];

  if (canReadUsers && users) {
    const getDisplayNameFromUser = (user: SanitizedAdminUser) => {
      if (user.username) {
        return user.username;
      }

      if (user.firstname && user.lastname) {
        return formatMessage(
          {
            id: 'Settings.permissions.auditLogs.user.fullname',
            defaultMessage: '{firstname} {lastname}',
          },
          {
            firstname: user.firstname,
            lastname: user.lastname,
          }
        );
      }

      return user.email;
    };

    const userOptions = users.map((user) => {
      return {
        label: getDisplayNameFromUser(user),
        // Combobox expects a string value
        customValue: user.id.toString(),
      };
    });

    return [
      ...filters,
      {
        name: 'user',
        metadatas: {
          customOperators,
          label: formatMessage({
            id: 'Settings.permissions.auditLogs.user',
            defaultMessage: 'User',
          }),
          options: userOptions,
          customInput: ComboboxFilter,
        },
        fieldSchema: { type: 'relation', mainField: { name: 'id' } },
      },
    ];
  }

  return filters;
};
