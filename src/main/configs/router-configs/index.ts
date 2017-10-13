/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { FavoriteContainer, favoriteRouterConfigs } from '../../../business-module/favorite/index';
import { HomeContainer, homeRouterConfigs } from '../../../business-module/home/index';
import { MeContainer, meRouterConfigs } from '../../../business-module/me/index';
import { TrendingContainer, trendingRouterConfigs } from '../../../business-module/trending/index';

export default {
  HomeContainer: {
    RootView: {
      screen: HomeContainer,
    },
    ...homeRouterConfigs,
  },
  TrendingContainer: {
    RootView: {
      screen: TrendingContainer,
    },
    ...trendingRouterConfigs,
  },
  FavoriteContainer: {
    RootView: {
      screen: FavoriteContainer,
    },
    ...favoriteRouterConfigs,
  },
  MeContainer: {
    RootView: {
      screen: MeContainer,
    },
    ...meRouterConfigs,
  },
};
