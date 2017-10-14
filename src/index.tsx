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
import { rootEpic } from './dataflow/epic/index';
import { rootLogic } from './dataflow/logic/index';
import middlewares from './dataflow/middleware/index';
import { rootReducer } from './dataflow/reducer/index';
import { HomeContainer, TabContainer } from './pages/index';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:9999/pages/graphql',
    // uri: 'https://api.github.com/graphql',
  }),
});

const networkClient = NetworkClient.getInstance();

const store = configureApolloStore({}, apolloClient, networkClient, rootReducer, rootLogic, rootEpic, middlewares);

export default () => (
  <MarioProvider client={apolloClient} store={store}>
    <HomeContainer />
  </MarioProvider>
);
