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

import Dimensions from 'Dimensions';
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
    console.log("=====>");
    // var currentPage = Math.floor(e.nativeEvent.contentOffset.x/width);
    this.setState({
      activePage: (this.state.activePage === 0) ? 1 : 0
    });

  }

  renderScrollViewItem(){
    var itemArr = [];
    var colorArr = ['green' , 'red'];
    for (var i = 0; i < colorArr.length; i++) {
      itemArr.push(
        <View key={i} style={{backgroundColor: colorArr[i] , width: width, height: 120}}>
          <Text>{i}</Text>
        </View>
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
