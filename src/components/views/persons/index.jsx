import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListPersons } from './ListPersons';
import { Modal, FormPerson, Button } from '../../common';
import { Title } from '../../../styles/Common';
import { Header, OptionsHeader } from '../../../styles/Main';
import { createPerson, getAllPersons } from '../../../redux/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Rings } from 'react-loader-spinner';
import { useTranslation } from 'react-i18next';
import ListIcon from '../../../assets/list.svg';
import GridIcon from '../../../assets/grid.svg';

export const Persons = () => {
  const { t } = useTranslation('global');
  const [modal, setModal] = useState(false);
  const [showGridPersons, setShowGridPersons] = useState(false);
  let { businessId } = useParams();
  const dispatch = useDispatch();
  const { persons, loading, needRender, business } = useSelector(
    (state) => state,
    shallowEqual
  );
  const handleCreatePerson = (person) => {
    dispatch(createPerson(businessId, person));
  };

  useEffect(() => {
    if (needRender) {
      dispatch(getAllPersons(businessId));
    }
  }, [dispatch, businessId, needRender]);

  return (
    <>
      <Modal isShow={modal}>
        <FormPerson
          title={t('cards.person.title.create')}
          action={{ create: handleCreatePerson, closed: () => setModal(false) }}
        />
      </Modal>

      {loading ? (
        <Rings heigth='100' width='100' color='grey' ariaLabel='loading' />
      ) : (
        <>
          <Header>
            <Title>{business.name}</Title>
            <OptionsHeader>
              <button
                onClick={() => setShowGridPersons(!showGridPersons)}
                style={{ marginRight: 20 }}
              >
                <img src={showGridPersons ? ListIcon : GridIcon} alt='list' />
              </button>
              <Button
                name={t('buttons.create-person')}
                onClick={() => setModal(true)}
              />
            </OptionsHeader>
          </Header>
          <ListPersons persons={persons} showGridPersons={showGridPersons} />
        </>
      )}
    </>
  );
};
