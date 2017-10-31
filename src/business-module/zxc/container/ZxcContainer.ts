/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { inject, ViewModel } from 'mario-architecture-components';
import { bind } from 'mario-ducks';
import { mapStateToProps } from '../ducks/selector/index';
import { IViewModelProps, ZxcViewModel } from '../view-model/index';
import { IViewProps, ZxcView } from '../view/index';

export default bind(mapStateToProps)(inject<IViewProps, IViewModelProps, ViewModel<IViewModelProps>>(ZxcView, ZxcViewModel));
