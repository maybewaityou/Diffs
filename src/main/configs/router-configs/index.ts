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

const mapToConfigs = (containers: any) => {
  const keys = Object.keys(containers);
  const config: any = {};
  keys.forEach((key) => {
    config[key] = {
      screen: containers[key],
    };
  });
  return config;
};

export default {
  HomeContainer: {
    RootView: {
      screen: HomeContainer,
    },
    ...mapToConfigs(homeRouterConfigs),
  },
  TrendingContainer: {
    RootView: {
      screen: TrendingContainer,
    },
    ...mapToConfigs(trendingRouterConfigs),
  },
  FavoriteContainer: {
    RootView: {
      screen: FavoriteContainer,
    },
    ...mapToConfigs(favoriteRouterConfigs),
  },
  MeContainer: {
    RootView: {
      screen: MeContainer,
    },
    ...mapToConfigs(meRouterConfigs),
  },
};
