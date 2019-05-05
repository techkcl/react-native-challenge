import React from 'react';
import {
        FlatList,
        ScrollView,
        SafeAreaView,
        ImageBackground,
        StyleSheet,
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
        Avatar,
        Image,
        Button } from 'react-native-elements';

import {createStackNavigator,
        createAppContainer } from "react-navigation";

import ViewMoreText from 'react-native-view-more-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

class ScreenThree extends React.Component {


  static navigationOptions = ({ navigation, screenProps }) => ({
    title:  navigation.getParam('imageTitle'),
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
    const url = 'https://api.imgur.com/3/image/'+navigation.getParam('imageID')+'/comments?client_id=abe6421e86f1f46';
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
                   data: res.data,
                   loading: false
                 });
          this.arrayholder = res.data;
    });

  }

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

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      style = {{height:160}}
      title = {<Text style={{color:'#428bca', fontSize: 20}}>{item.author}</Text>}
      subtitle = {<Text style={{top:10, fontSize: 15}}>{item.comment}</Text>}
    />
  )

  renderViewMore(onPress){
     return(
       <Button type="clear" title='View more' onPress={onPress} style={{color: '#006bff', top:16, left:5}}/>
     )
   }
   renderViewLess(onPress){
     return(
       <Button type="clear" title='View less' onPress={onPress} style={{color: '#006bff', top:16, left:5}}/>
     )
   }
  render() {
    const { navigation } = this.props;
    return (
            <ScrollView>
               <Image
                source = {{
                           uri: navigation.getParam('imageLink')}}
                style = {{
                          flex:2,
                          top: 0,
                          width: '100%',
                          height: 450
                         }}
                PlaceholderContent={<ActivityIndicator/>}
                />

                <View style={{top: 45, flex: 1, flexDirection: 'row'}}>

                        <View style={{width: 110, height: 50, backgroundColor: 'white', flexDirection: 'row'}}>
                              <Entypo name={'thumbs-up'}
                                      style={{ left:16, top: 10}}
                                      size={35} color="black"/>
                              <Text style={{ left:16, top: 25}} >{navigation.getParam('imageUps')}</Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                            <View style={{width: 100, height: 50, backgroundColor: 'white', flexDirection: 'row'}}>
                                    <Entypo name={'thumbs-down'}
                                            style={{ left:10, top: 16}}
                                            size={35} color="black"/>
                                    <Text style={{ left:16, top: 25}} >{navigation.getParam('imageDowns')}</Text>
                            </View>
                            <View style={{width: 120, height: 50, backgroundColor: 'white', flexDirection: 'row'}}>
                                    <Entypo name={'eye'}
                                            style={{ left:0, top: 13}}
                                            size={35} color="black"/>
                                    <Text style={{ left:5, top: 25}} >{navigation.getParam('imageViews')}</Text>
                            </View>

                        </View>
                </View>

                <View style={{left:10, top: 70, width:'93%'}}>

                        <Text style={{fontSize: 20, fontWeight: 'bold', left: 16}}>Description:</Text>
                        <ViewMoreText
                            numberOfLines={3}
                            renderViewMore={this.renderViewMore}
                            renderViewLess={this.renderViewLess}
                            textStyle={{left:10, top: 10, textAlign: 'left', width:'93%'}}
                          >
                         <Text style={{top: 50}}>
                          {navigation.getParam('imageDescription')}
                         </Text>
                       </ViewMoreText>

                      <View style={{top:30,height: 2,width: "100%",backgroundColor: "#CED0CE"}}/>

                     <View>
                        <Text style={{fontSize: 20,fontWeight: 'bold', top:50, height: 70, left:16 }}>Coments:</Text>
                     </View>

                      <View style={{top: 30}}>

                                <FlatList
                                   keyExtractor={this.keyExtractor}
                                   data={this.state.data}
                                   renderItem={this.renderItem}
                                   ItemSeparatorComponent={this.renderSeparator}
                                 />

                      </View>
              </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      top: 20
  },

});


export default ScreenThree;
