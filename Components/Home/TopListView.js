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
  ListView,
  TouchableOpacity,
  Platform
} from 'react-native';

import Dimensions from 'Dimensions';
var {width , height} = Dimensions.get("window");
var clos = 5 ;
var cellWH = Platform.OS === 'ios' ? 70 : 50;
var marginL = (width - cellWH * clos) / (clos + 1) ;



class TopListView extends Component {

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataArr),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID, highlightRow)=> this.renderRow(rowData, sectionID, rowID, highlightRow)}
          contentContainerStyle={styles.contentViewStyle}
        />

      </View>
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow){
    return(
      <TouchableOpacity onPress={()=> {alert('点击了'+rowID);}}>
        <View style={{justifyContent: 'center', alignItems: 'center' , width: cellWH, height: cellWH,}}>
          <Image source={{uri: rowData.image}} style={{width: 52 , height: 52 }}/>
          <Text>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  contentViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    marginTop: 10,
    marginLeft: marginL

  },

});

module.exports = TopListView;
