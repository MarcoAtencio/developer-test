import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePerson, deletePerson } from '../../../redux/actions';
import TrashIcon from '../../../assets/trash.svg';
import PenIcon from '../../../assets/pen.svg';
import { FormPerson, CardDelete, Modal } from '../../common';
import { useDispatch } from 'react-redux';
import { Text, SubText } from '../../../styles/Common.js';
import { useTranslation } from 'react-i18next';
import {
  ItemGrid,
  HeaderItemGrid,
  ItemRow,
  Actions,
} from '../../../styles/Main';

export const ListPersons = ({ persons, showGridPersons }) => {
  const [person, setPerson] = useState({});
  const { t } = useTranslation('global');
  let { businessId } = useParams();
  const dispatch = useDispatch();
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const handleUpdatePersons = (persons) => {
    dispatch(updatePerson(businessId, persons));
  };

  const handleDeletePerson = () => {
    dispatch(deletePerson(businessId, person.personId));
  };

  const RowPersons = () => (
    <>
      {persons.map((person) => (
        <ItemRow key={person.personId}>
          <Text>{person.name}</Text>
          <Text>{person.role}</Text>
          <Actions>
            <button>
              <img
                src={PenIcon}
                alt='pen'
                onClick={() => {
                  setModalUpdate(true);
                  setPerson(person);
                }}
              />
            </button>
            <button>
              <img
                src={TrashIcon}
                alt='trash'
                onClick={() => {
                  setModalDelete(true);
                  setPerson(person);
                }}
              />
            </button>
          </Actions>
        </ItemRow>
      ))}
    </>
  );

  const GridPersons = () => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gridGap: 20,
        }}
      >
        {persons?.map((person) => (
          <ItemGrid key={person.personId}>
            <HeaderItemGrid>
              <div>
                <Text>{person.name}</Text>
                <SubText>{person.role}</SubText>
              </div>
              <Actions>
                <button>
                  <img
                    src={PenIcon}
                    alt='pen'
                    onClick={() => {
                      setModalUpdate(true);
                      setPerson(person);
                    }}
                  />
                </button>
                <button>
                  <img
                    src={TrashIcon}
                    alt='trash'
                    onClick={() => {
                      setModalDelete(true);
                      setPerson(person);
                    }}
                  />
                </button>
              </Actions>
            </HeaderItemGrid>

            <div style={{ paddingTop: 15 }}>
              <Text>{person.phone}</Text>
              <Text>{person.email}</Text>
            </div>
          </ItemGrid>
        ))}
      </div>
    );
  };

  return (
    <>
      <Modal isShow={modalUpdate}>
        <FormPerson
          title={t('cards.person.title.update')}
          data={person}
          action={{
            update: handleUpdatePersons,
            closed: () => setModalUpdate(false),
          }}
        />
      </Modal>
      <Modal isShow={modalDelete}>
        <CardDelete
          title={person.name}
          action={{
            delete: handleDeletePerson,
            closed: () => setModalDelete(false),
          }}
        />
      </Modal>
      {showGridPersons ? <GridPersons /> : <RowPersons />}
    </>
  );
};
