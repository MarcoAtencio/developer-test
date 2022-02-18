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
  RESTART_RENDER,
} from '../actions/types';

const initialState = {
  businesses: [
    { businessId: 'ewrwer', name: 'PenIcon' },
    { businessId: 'ewrwer1231', name: 'PepSo' },
    { businessId: 'e131', name: 'Toyota' },
  ],
  business: {},
  loading: true,
  persons: [],
  error: null,
  needRender: true,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case RESTART_RENDER:
      return {
        ...state,
        needRender: true,
      };
    case START_FETCH:
      return {
        ...state,
        loading: true,
        error: null,
        needRender: true,
      };
    case GET_ALL_BUSINESSES:
      return {
        ...state,
        businesses: payload,
        loading: false,
        error: null,
        needRender: false,
      };
    case CREATE_BUSINESS:
      return {
        ...state,
        needRender: true,
      };
    case UPDATE_BUSINESS:
      return {
        ...state,
        businesses: state.businesses.map((business) => {
          if (business.businessId === payload.businessId) {
            return payload;
          }
          return business;
        }),
      };
    case DELETE_BUSINESS:
      return {
        ...state,
        businesses: state.businesses.filter(
          (business) => business.businessId !== payload
        ),
      };
    case GET_BUSINESS:
      return {
        ...state,
        business: payload,
        error: null,
      };
    case GET_ALL_PERSONS:
      return {
        ...state,
        persons: payload,
        loading: false,
        error: null,
        needRender: false,
      };
    case CREATE_PERSON:
      return {
        ...state,
        needRender: true,
      };
    case UPDATE_PERSON:
      return {
        ...state,
        persons: state.persons.map((person) => {
          if (person.personId === payload.personId) {
            return payload;
          }
          return person;
        }),
      };
    case DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter((person) => person.personId !== payload),
      };
    case FAIL_FETCH:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
