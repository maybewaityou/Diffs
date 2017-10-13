/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { favoriteEpics } from '../../business-module/favorite/index';
import { homeEpics } from '../../business-module/home/index';
import { meEpics } from '../../business-module/me/index';
import { trendingEpics } from '../../business-module/trending/index';

export default [

  ...homeEpics,
  ...trendingEpics,
  ...favoriteEpics,
  ...meEpics,
];
