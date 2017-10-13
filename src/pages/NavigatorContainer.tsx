/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { ApolloClient, configureApolloStore, configureStore, createNetworkInterface, MarioProvider, Middleware } from 'mario-ducks';
import { log, NetworkClient, toJSON, toString } from 'mario-utilities';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { routerConfigs } from '../main/configs/index';

export const HomeNavigatorContainer = StackNavigator(routerConfigs.HomeContainer);
export const TrendingNavigatorContainer = StackNavigator(routerConfigs.TrendingContainer);
export const FavoriteNavigatorContainer = StackNavigator(routerConfigs.FavoriteContainer);
export const MeNavigatorContainer = StackNavigator(routerConfigs.MeContainer);
