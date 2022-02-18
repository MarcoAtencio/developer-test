import React, { useState } from 'react';
import { CardDelete, FormBusiness, Modal } from '../../common';
import { updateBusiness, deleteBusiness } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Text } from '../../../styles/Common';
import TrashIcon from '../../../assets/trash.svg';
import PenIcon from '../../../assets/pen.svg';
import { ItemRow, Actions } from '../../../styles/Main';

export const ListBusiness = ({ businesses }) => {
  const [business, setBusiness] = useState({});
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const dispatch = useDispatch();

  const handleUpdateBusiness = ({ name }) => {
    dispatch(updateBusiness({ businessId: business.businessId, name: name }));
  };

  const handleDeleteBusiness = () => {
    dispatch(deleteBusiness(business.businessId));
  };

  const Business = ({ business }) => {
    return (
      <ItemRow>
        <Link to={`/business/${business.businessId}`} key={business.businessId}>
          <Text>{business.name}</Text>
        </Link>
        <Actions>
          <button
            onClick={() => {
              setModalUpdate(true);
              setBusiness(business);
            }}
          >
            <img src={PenIcon} alt='pen' />
          </button>
          <button
            onClick={() => {
              setModalDelete(true);
              setBusiness(business);
            }}
          >
            <img src={TrashIcon} alt='trash' />
          </button>
        </Actions>
      </ItemRow>
    );
  };

  return (
    <>
      <Modal isShow={modalUpdate}>
        <FormBusiness
          title='Update Business'
          name={business.name}
          action={{
            update: handleUpdateBusiness,
            closed: () => setModalUpdate(false),
          }}
        />
      </Modal>

      <Modal isShow={modalDelete}>
        <CardDelete
          title={business.name}
          action={{
            delete: handleDeleteBusiness,
            closed: () => setModalDelete(false),
          }}
        />
      </Modal>
      <div>
        {businesses?.map((business) => (
          <Business
            key={`businessId${business?.businessId}`}
            business={business}
          />
        ))}
      </div>
    </>
  );
};
