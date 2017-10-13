/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { Observable } from 'rxjs';

export interface IAsync {
  background: (params: any, callback: any) => any;
}

export class Async implements IAsync {

  public background(params: any, callback: any) {
    Observable.create((subscriber: any) => {
      subscriber.next(params);
      subscriber.complete();
    })
      .subscribe(callback);
  }

}
