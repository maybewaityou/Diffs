/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ViewModel } from 'mario-architecture-components';

export interface IViewModelProps {
  actions: (type: string, payload?: any) => any;

}

export default class extends ViewModel<IViewModelProps> {

  public onCreate(props: Readonly<any>, context?: any) {

  }

  public model = () => ({

  })

  public handlers = () => ({

  })

  public onCleared() {

  }

}
