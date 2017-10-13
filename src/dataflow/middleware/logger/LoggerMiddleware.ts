/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { IAction } from 'mario-ducks';
import { log, toString } from 'mario-utilities';

export default (store: any) => (next: any) => (action: any) => {
  log(`== action start ===>>>> ${toString(action)}`);
  next(action);
  log(`== action end ===>>>> ${toString(action)}`);
};
