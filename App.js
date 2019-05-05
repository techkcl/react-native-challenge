import React from 'react';
import {
        FlatList,
        StyleSheet,
        SafeAreaView,
        ActivityIndicator,
        Text,
        Alert,
        View } from 'react-native';

import {
        SearchBar,
        List,
        ListItem,
        Header,
        Divider,
        Button } from 'react-native-elements';

import { createStackNavigator,
         createAppContainer } from "react-navigation";

import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenSecond from './ScreenSecond';
import ScreenThree from './ScreenThree';

class App extends React.Component {

  //Set style for this navigation bar
  static navigationOptions = {
     headerTitle: 'Imgur'
   };

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      data: []
    }
  }
   componentDidMount(){
    this.getUserRandoms();
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      style = {{height:60}}
      title = {item.display_name}
      rightIcon = {<Button
                       type="clear"
                       icon={<Icon name={'angle-right'} size={20}/>}
                       onPress={() => this.props.navigation.navigate('Second', {
                                                  screenTitle: item.display_name

                                             })}
                     />}
    />
  )

  getUserRandoms = () => {

    const url = "https://api.imgur.com/3/tags?client_id=792029ccf30ea2d";
    this.setState({ loading: true })

    fetch(url, {
       method: 'GET',
       timeout: 3,
       credentials: 'include',
        processData: false,
        mimeType: 'multipart/form-data',
        contentType : false,
        data: 'form'
    })
    .then(res => res.json() )
    .then(res => {
                 this.setState({
                   data: res.data.tags,
                   loading: false
                 });
                 this.state.arrayholder = res.data.tags;

    });
  };

  state = {
            search: '',
           };

  //Function of tagsearch  in list of elements Tags
  searchFilterFunction = search => {

       this.setState({ search });
       const newData = this.state.arrayholder.filter(item => {
           const itemData = `${item.display_name.toLowerCase()}`;
           const textData = search.toLowerCase();

           return itemData.indexOf(textData) >= 0 ;
          });

       this.setState({ data: newData });
      };
   //Function of cell ListItem separator
      renderSeparator = () => {
       return (
         <View
           style={{
             height: 1,
             width: "100%",
             backgroundColor: "#CED0CE"
           }}
         />
       );
     };

  render() {

    const { search } = this.state;

        if(this.state.loading){
            return(
              <View style={styles.container}>
                  <ActivityIndicator size='large' animating/>
              </View>
            )
        } else {
          return (

             <SafeAreaView>
                 <SearchBar
                   placeholder="search"
                   platform="ios"
                   inputContainerStyle={{ backgroundColor: '#ffffff' }}
                   containerStyle={{ backgroundColor: '#ababab' }}
                   onChangeText={this.searchFilterFunction}
                   autoCorrect = {false}
                   value={search}
                 />
                 <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                  />
            </SafeAreaView>
          );
        }

  }
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }

});

const AppStackNavigator = createStackNavigator({
  Home: App,
  Second : ScreenSecond,
  Three : ScreenThree

})

const container = createAppContainer(AppStackNavigator);
export default container;
