import { Title, Card, GroupButton } from '../../styles/Common';
import { useState } from 'react';
import { Button } from './Buttons';
import { Field, FielDate } from './Inputs';
import { useTranslation } from 'react-i18next';

export const FormBusiness = ({ title, action, name }) => {
  const [business, setBusiness] = useState({
    name: name || '',
  });
  const { t } = useTranslation('global');

  const handelChange = (e) => {
    setBusiness({
      ...business,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card>
      <Title>{title}</Title>

      <Field
        label={t('cards.person.labels.name')}
        name='name'
        value={business.name}
        setChanged={handelChange}
      />
      <GroupButton>
        <Button
          mode='secondary'
          onClick={action.closed}
          name={t('buttons.cancel')}
        />
        {action.create ? (
          <Button
            name={t('buttons.create')}
            onClick={() => {
              action.create(business);
              action.closed();
            }}
          />
        ) : (
          <Button
            name={t('buttons.update')}
            onClick={() => {
              action.update(business);
              action.closed();
            }}
          />
        )}
      </GroupButton>
    </Card>
  );
};

export const FormPerson = ({ title, action, data }) => {
  const [person, setPerson] = useState({
    personId: data?.personId || '',
    name: data?.name || '',
    email: data?.email || '',
    phone: data?.phone || '',
    role: data?.role || '',
    join_date: '2012-08-26',
  });
  const { t } = useTranslation('global');

  const handelChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  console.log({ person });
  return (
    <Card>
      <Title>{title}</Title>
      <div style={{ marginTop: 20, paddingBottom: 20 }}>
        <Field
          label={t('cards.person.labels.name')}
          name='name'
          value={person.name}
          setChanged={handelChange}
        />
        <Field
          label={t('cards.person.labels.role')}
          name='role'
          value={person.role}
          setChanged={handelChange}
        />
        <Field
          label={t('cards.person.labels.email')}
          name='email'
          value={person.email}
          setChanged={handelChange}
        />

        <Field
          label={t('cards.person.labels.phone')}
          name='phone'
          value={person.phone}
          setChanged={handelChange}
        />

        <Field
          label={t('cards.person.labels.join-date')}
          name='join_date'
          value={person.join_date}
          setChanged={handelChange}
        />
      </div>

      <GroupButton>
        <Button
          name={t('buttons.cancel')}
          mode='secondary'
          onClick={action.closed}
        />
        {action.create ? (
          <Button
            name={t('buttons.create')}
            onClick={() => {
              action.create(person);
              action.closed();
            }}
          />
        ) : (
          <Button
            name={t('buttons.update')}
            onClick={() => {
              action.update(person);
              action.closed();
            }}
          />
        )}
      </GroupButton>
    </Card>
  );
};

export const CardDelete = ({ title, action }) => {
  const { t } = useTranslation('global');
  return (
    <Card>
      <Title>
        {t('cards.delete.title')} {title}?
      </Title>
      <GroupButton style={{ marginTop: 20 }}>
        <Button
          name={t('buttons.cancel')}
          mode='secondary'
          onClick={action.closed}
        />

        <Button
          name={t('buttons.delete')}
          mode='danger'
          onClick={() => {
            action.delete();
            action.closed();
          }}
        />
      </GroupButton>
    </Card>
  );
};
