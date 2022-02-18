import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBusiness } from '../../../redux/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Persons } from '../persons';
import { Content } from '../../../styles/Main';

const Business = () => {
  const dispatch = useDispatch();
  let { businessId } = useParams();
  const { business } = useSelector((state) => state, shallowEqual);
  const [showGridPersons, setShowGridPersons] = useState(true);

  useEffect(() => {
    dispatch(getBusiness(businessId));
    dispatch({ type: 'RESTART_RENDER' });
  }, [dispatch, businessId]);

  return (
    <Content showGridPersons>
      <Persons />
    </Content>
  );
};

export default Business;
