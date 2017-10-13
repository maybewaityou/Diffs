/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import { PureComponent } from 'mario-pure';
import * as React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Constant, Images, Style } from '../main/constant/index';
import { FavoriteNavigatorContainer, HomeNavigatorContainer, MeNavigatorContainer, TrendingNavigatorContainer } from './NavigatorContainer';

export interface IStyle {
  container: ViewStyle;

}

interface IProps {

}

interface IState {
  selectedTab: TabSelector;
}

enum TabSelector {
  POPULAR = 'TAB_POPULAR',
  TRENDING = 'TAB_TRENDING',
  FAVORITE = 'TAB_FAVORITE',
  ME = 'TAB_ME',
}

export default class extends PureComponent<IProps, IState> {

  constructor(props: Readonly<IProps>, context?: any) {
    super(props, context);

    this.state = {
      selectedTab: TabSelector.POPULAR,
    };
  }

  public render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === TabSelector.POPULAR}
          title={Constant.homeTabHeaderTitle}
          selectedTitleStyle={Style.tabFooter.selectedTabTitle}
          renderIcon={() => <Image style={Style.tabFooter.tabImage} source={Images.popular} />}
          renderSelectedIcon={() => <Image style={[Style.tabFooter.tabImage, Style.tabFooter.selectedTabImage]} source={Images.popular} />}
          onPress={() => this.setState({ selectedTab: TabSelector.POPULAR })}>
          <HomeNavigatorContainer />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === TabSelector.TRENDING}
          title={Constant.trendingTabFooterTitle}
          selectedTitleStyle={Style.tabFooter.selectedTabTitle}
          renderIcon={() => <Image style={Style.tabFooter.tabImage} source={Images.trending} />}
          renderSelectedIcon={() => <Image style={[Style.tabFooter.tabImage, Style.tabFooter.selectedTabImage]} source={Images.trending} />}
          onPress={() => this.setState({ selectedTab: TabSelector.TRENDING })}>
          <TrendingNavigatorContainer />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === TabSelector.FAVORITE}
          title={Constant.favoriteTabFooterTitle}
          selectedTitleStyle={Style.tabFooter.selectedTabTitle}
          renderIcon={() => <Image style={Style.tabFooter.tabImage} source={Images.favorite} />}
          renderSelectedIcon={() => <Image style={[Style.tabFooter.tabImage, Style.tabFooter.selectedTabImage]} source={Images.favorite} />}
          onPress={() => this.setState({ selectedTab: TabSelector.FAVORITE })}>
          <FavoriteNavigatorContainer />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === TabSelector.ME}
          title={Constant.meTabFooterTitle}
          selectedTitleStyle={Style.tabFooter.selectedTabTitle}
          renderIcon={() => <Image style={Style.tabFooter.tabImage} source={Images.me} />}
          renderSelectedIcon={() => <Image style={[Style.tabFooter.tabImage, Style.tabFooter.selectedTabImage]} source={Images.me} />}
          onPress={() => this.setState({ selectedTab: TabSelector.ME })}>
          <MeNavigatorContainer />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

}

const styles = StyleSheet.create<IStyle>({
  container: {

  },

});
