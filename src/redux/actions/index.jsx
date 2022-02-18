import axios from 'axios';
import {
  GET_ALL_BUSINESSES,
  CREATE_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS,
  GET_BUSINESS,
  GET_ALL_PERSONS,
  CREATE_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
  START_FETCH,
  FAIL_FETCH,
} from './types';

const API_KEY = 'yVzzSZKazb4pIhuMdW7NK1KPDhAostnG7hDDjQkq';

export const getAllBusinesses = () => (dispatch) => {
  dispatch({
    type: START_FETCH,
  });
  axios
    .get(
      'https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business',
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: GET_ALL_BUSINESSES,
        payload: res.data.businesses,
      });
      console.log(res);
    })
    .catch((err) => dispatch({ type: FAIL_FETCH, payload: err }));
};

export const createBusiness = (business) => (dispatch) => {
  fetch(
    'https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business',
    {
      method: 'POST',
      headers: {
        'x-api-key': 'yVzzSZKazb4pIhuMdW7NK1KPDhAostnG7hDDjQkq',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(business),
      redirect: 'follow',
    }
  )
    .then((res) =>
      dispatch({
        type: CREATE_BUSINESS,
      })
    )
    .catch((err) => console.log(err));
};

export const updateBusiness = (business) => (dispatch) => {
  console.log(business);
  fetch(
    `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${business.businessId}`,
    {
      method: 'PUT',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: business.name }),
      redirect: 'follow',
    }
  )
    .then((res) => {
      dispatch({ type: UPDATE_BUSINESS, payload: business });
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const deleteBusiness = (business) => (dispatch) => {
  fetch(
    `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${business}`,
    {
      method: 'DELETE',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    }
  )
    .then((res) => {
      dispatch({ type: DELETE_BUSINESS, payload: business });
    })
    .catch((err) => console.log(err));
};

export const getBusiness = (businessId) => (dispatch) => {
  axios
    .get(
      `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: GET_BUSINESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getAllPersons = (businessId) => (dispatch) => {
  dispatch({
    type: START_FETCH,
  });
  axios
    .get(
      `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}/persons`,
      {
        headers: {
          'x-api-key': API_KEY,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: GET_ALL_PERSONS,
        payload: res.data.persons,
      });
    })
    .catch((err) => dispatch({ type: FAIL_FETCH, payload: err }));
};

export const createPerson = (businessId, person) => (dispatch) => {
  console.log(person);
  fetch(
    `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}/persons`,
    {
      method: 'POST',
      headers: {
        'x-api-key': 'yVzzSZKazb4pIhuMdW7NK1KPDhAostnG7hDDjQkq',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
      redirect: 'follow',
    }
  )
    .then((res) => dispatch({ type: CREATE_PERSON }))
    .catch((err) => console.log(err));
};

export const updatePerson = (businessId, person) => (dispatch) => {
  console.log(person);
  fetch(
    `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}/persons/${person.personId}`,
    {
      method: 'PUT',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
      redirect: 'follow',
    }
  )
    .then((res) => {
      dispatch({ type: UPDATE_PERSON, payload: person });
    })
    .catch((err) => console.log(err));
};

export const deletePerson = (businessId, personId) => (dispatch) => {
  console.log({ personId, businessId });
  fetch(
    `https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business/${businessId}/persons/${personId}`,
    {
      method: 'DELETE',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    }
  )
    .then((res) => {
      dispatch({ type: DELETE_PERSON, payload: personId });
    })
    .catch((err) => console.log(err));
};
