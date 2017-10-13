/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { favoriteLogics } from '../../business-module/favorite/index';
import { homeLogics } from '../../business-module/home/index';
import { meLogics } from '../../business-module/me/index';
import { trendingLogics } from '../../business-module/trending/index';

export default [

  ...homeLogics,
  ...trendingLogics,
  ...favoriteLogics,
  ...meLogics,
];
