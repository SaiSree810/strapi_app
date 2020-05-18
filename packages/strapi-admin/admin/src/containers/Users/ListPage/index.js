import React, { useEffect, useReducer, useState } from 'react';
import { useQuery } from 'strapi-helper-plugin';
import { useHistory, useLocation } from 'react-router-dom';
import { Flex } from '@buffetjs/core';
import BaselineAlignement from '../../../components/BaselineAlignement';
import useSettingsHeaderSearchContext from '../../../hooks/useSettingsHeaderSearchContext';
import Footer from '../../../components/Users/Footer';
import List from '../../../components/Users/List';
import SortPicker from '../../../components/Users/SortPicker';
import Header from './Header';
import ModalForm from './ModalForm';
// TODO
import { pagination as fakeDataPagination, rows } from './utils/tempData';
import init from './init';
import { initialState, reducer } from './reducer';

const ListPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { toggleHeaderSearch } = useSettingsHeaderSearchContext();
  const query = useQuery();
  const { push } = useHistory();
  const { search } = useLocation();
  const [
    {
      data,
      dataToDelete,
      isLoading,
      pagination: { total },
    },
    dispatch,
  ] = useReducer(reducer, initialState, init);
  const _limit = parseInt(query.get('_limit') || 10, 10);
  const _page = parseInt(query.get('_page') || 1, 10);

  useEffect(() => {
    const getData = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          dispatch({
            type: 'GET_DATA_SUCCEEDED',
            data: rows,
            pagination: fakeDataPagination,
          });
          resolve();
        }, 1000);
      });
    };

    getData();
  }, []);

  useEffect(() => {
    toggleHeaderSearch({ id: 'Settings.permissions.menu.link.users.label' });

    return () => {
      toggleHeaderSearch();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeDataToDelete = ids => {
    dispatch({
      type: 'ON_CHANGE_DATA_TO_DELETE',
      dataToDelete: ids,
    });
  };

  const handleChangeFooterParams = ({ target: { name, value } }) => {
    const paramName = name.split('.')[1];
    const currentSearch = new URLSearchParams(search);
    // Update the currentSearch
    currentSearch.set(paramName, value);

    push({
      search: currentSearch.toString(),
    });
  };

  const handleToggle = () => setIsModalOpened(prev => !prev);

  return (
    <div>
      <Header
        count={total}
        dataToDelete={dataToDelete}
        onClickAddUser={handleToggle}
        isLoading={isLoading}
      />
      <BaselineAlignement top size="1px">
        <Flex flexWrap="wrap">
          <SortPicker />
        </Flex>
      </BaselineAlignement>
      <ModalForm isOpen={isModalOpened} onToggle={handleToggle} />
      <div style={{ height: 24 }} />
      <List isLoading={isLoading} data={data} onChange={handleChangeDataToDelete} />
      <Footer count={total} onChange={handleChangeFooterParams} params={{ _limit, _page }} />
    </div>
  );
};

export default ListPage;
