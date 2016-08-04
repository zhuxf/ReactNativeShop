/* jshint esversion: 6 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import TopListView from './TopListView.js';
import Dimensions from 'Dimensions';
import TopMenu from '../../LocalData/TopMenu.json';
var {width , height} = Dimensions.get("window");

class HomeTopView extends Component {

  constructor(props){
    super(props);
    this.state = {
      activePage: 0 ,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}
          onScroll={()=> this.onScrollAnimationEnd()} >
          {this.renderScrollViewItem()}
        </ScrollView>
        <View style={{flexDirection: 'row' , justifyContent: 'center'}}>
          {this.renderIndicator()}
        </View>

      </View>
    );
  }

  onScrollAnimationEnd(){
    // var currentPage = Math.floor(e.nativeEvent.contentOffset.x/width);
    this.setState({
      activePage: (this.state.activePage === 0) ? 1 : 0
    });

  }

  renderScrollViewItem(){
    var itemArr = [];
    var colorArr = ['green' , 'red'];
    var dataArr = TopMenu.data;
    for (var i = 0; i < dataArr.length; i++) {
      itemArr.push(
        <TopListView key={i} dataArr={dataArr[i]} />
      );

    }
    return itemArr;
  }

  renderIndicator(){
    var indicatorArr = [] , mStyle ;
    for (var i = 0; i < 2; i++) {
      mStyle = (i === this.state.activePage)? {color: 'orange'}: {color: 'gray'};
      indicatorArr.push(
        <Text key={i} style={[{fontSize:25}, mStyle]}>&bull;</Text>
      );
    }
    return indicatorArr;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});

module.exports = HomeTopView;
