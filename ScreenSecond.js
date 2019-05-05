import React from 'react';
import {
        FlatList,
        StyleSheet,
        SafeAreaView,
        ScrollView,
        ActivityIndicator,
        Text,
        View } from 'react-native';

import {
        SearchBar,
        List,
        ListItem,
        Image,
        Divider,
        Button } from 'react-native-elements';

import { createStackNavigator,
        createAppContainer } from "react-navigation";

import Icon from 'react-native-vector-icons/FontAwesome';


class SecondScreen extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title:  navigation.getParam('screenTitle'),
    headerLeft: <Button
                      type="clear"
                      icon={<Icon   name={'angle-left'}
                                    style={{ bottom: 5 }}
                                    size={35} color="#428bca"/>}
                      onPress={ () => { navigation.goBack() }}
                      title=' Back'
                 />

  });

  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: false
    }
  }

  componentDidMount(){
    const {navigation} = this.props;
    const url = 'https://api.imgur.com/3/gallery/search/top/page=1?q='+navigation.getParam('screenTitle')+'&client_id=82e7c379c92f5c4';
    this.setState({loading: true});
    fetch(url, {
        method: 'GET',
        timeout: 0,
        credentials: 'include',
        processData: false,
        mimeType: 'multipart/form-data',
        contentType : false,
        data: 'form'
    })
    .then(res => res.json() )
    .then(res => {
           this.setState({
             data: res.data.filter(item => {

                     const itemSearchOne = `${item.is_album}`;
                     const dataClean = itemSearchOne.indexOf(false) > -1;
                     return dataClean;
               }),
             loading: false
           });
          this.arrayholder = res.data.filter(item => {

                  const itemSearchOne = `${item.is_album}`;
                  const dataClean = itemSearchOne.indexOf(false) > -1;
                  return dataClean;
            })
    });

  }
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (

    <ListItem
      title = {

                 <View>
                    <Text numberOfLines={2}
                         style={{height: 40,
                                 fontSize: 16,
                                 fontWeight: 'bold',
                                 justifyContent: 'center' }}
                                 >{item.title}</Text>
                 </View>

              }
      subtitle = {
                     <View>
                        <Text numberOfLines={4}
                          style={{top:10,
                                  height: 90,
                                  fontSize: 15,
                                  justifyContent: 'center' }}
                                  >{item.description}</Text>

                     </View>

                  }
      rightIcon = {<Button
                     type="clear"
                     icon={<Image
                             source={{ uri: item.link}}
                             style={{height: 105, width: 105}}
                             PlaceholderContent={<ActivityIndicator />}
                           />}
                     style={{ width: '100%', height: 110 }}
                     onPress={() => this.props.navigation.navigate('Three', {
                                                imageID: item.id,
                                                imageTitle: item.title,
                                                imageLink: item.link,
                                                imageUps: item.ups,
                                                imageDowns: item.downs,
                                                imageViews: item.views,
                                                imageDescription: item.description

                                           })}

                   />}

    />
  )


  state = {
            search: '',
           };

  //Function of tagsearch  in list of elements Tags
  searchFilterFunction = search => {

       this.setState({ search });
       const newData = this.arrayholder.filter(item => {

       const itemData = `${item.title.toUpperCase()}
                         ${(item.description || "").toUpperCase()}`;
       const textData = search.toUpperCase();

       return itemData.indexOf(textData) > -1;
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
                     keyExtractor = {this.keyExtractor}
                     data= {this.state.data}
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

export default SecondScreen;
