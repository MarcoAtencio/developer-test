import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getAllBusinesses, createBusiness } from '../../../redux/actions';
import { FormBusiness, Button, Modal } from '../../common';
import { ListBusiness } from './ListBusiness';
import { Title } from '../../../styles/Common';
import { Rings } from 'react-loader-spinner';
import { Content, Header } from '../../../styles/Main';
import { useTranslation } from 'react-i18next';

const Business = () => {
  const [t, i18n] = useTranslation('global');
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { businesses, loading, needRender } = useSelector(
    (state) => state,
    shallowEqual
  );

  const handleCreateBusiness = (business) => {
    dispatch(createBusiness(business));
  };

  useEffect(() => {
    if (needRender) {
      dispatch(getAllBusinesses());
    }
  }, [dispatch, needRender]);

  return (
    <Content>
      <Header>
        <Title>{t('header.bussiness')}</Title>
        <Button
          onClick={() => setModal(true)}
          name={t('buttons.create-business')}
        />
      </Header>
      <Modal isShow={modal}>
        <FormBusiness
          title='Create Business'
          action={{
            create: handleCreateBusiness,
            closed: () => setModal(false),
          }}
        />
      </Modal>
      {loading ? (
        <Rings heigth='100' width='100' color='grey' ariaLabel='loading' />
      ) : (
        <ListBusiness businesses={businesses} />
      )}
    </Content>
  );
};

export default Business;
