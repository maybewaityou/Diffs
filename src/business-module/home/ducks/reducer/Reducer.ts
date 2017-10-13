/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import Immutable, { fromJS, Map } from 'immutable';
import { acceptActions, IAction } from 'mario-ducks';
import {  } from '../actions/index';

const $initialState: Map<string, any> = fromJS({

});

export default acceptActions((state: Map<string, any> = $initialState, action: IAction) => {
  switch (action.type) {
    case '':
      return state.set('', action.payload);
    default:
      return state;
  }
}, [

]);
