/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { createLogic } from 'mario-ducks';
import {  } from '../actions/index';

function fetchDataSuccess(response: any) {
  return {
    type: 'success action type',
    payload: response,
  };
}

function fetchDataFailure(error: any) {
  return {
    type: 'failure action type',
    payload: error,
  };
}

export const queryLogic = createLogic({
  type: 'action type',

  processOptions: {
    dispatchReturn: true,
    successType: fetchDataSuccess,
    failType: fetchDataFailure,
  },

  process({ apollo, action, getState }: any) {
    return apollo
      .query({
        query: 'query gql',
        fetchPolicy: 'network-only',
      })
      .map((response: any) => response);
  },
});

export const mutateLogic = createLogic({
  type: 'action type',

  processOptions: {
    dispatchReturn: true,
    successType: fetchDataSuccess,
    failType: fetchDataFailure,
  },

  process: ({ apollo, action, getState }: any) => (
    apollo
      .mutate({
        mutation: 'mutation gql',
      })
      .map((response: any) => response)
  ),
});

export default [

];
