import React, { Component } from 'react'
import { Text, Image, View, StatusBar, ActivityIndicator, TouchableOpacity, FlatList} from 'react-native'

//Services
import { getTagImages } from '../services/Api'

//Styles
import Colors from '../styles/Colors';
import Layouts from '../styles/Layouts';
import Texts from '../styles/Texts';
import GalleryItem from '../components/GalleryItem';
import SearchBar from '../components/SearchBar';

export default class GalleryPage extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('displayName', 'Tag'),
      headerStyle: {
        backgroundColor: `#${navigation.getParam('accent', '291765')}`,
      },
      headerTintColor: Colors.text.light,
      headerTitleStyle: {
        fontFamily: 'AirbnbCerealApp-Bold', 
      },
    }
  };

  state = {
    loading: true,
    accent: '291765',
    data: [],
    searchString: '',
  };

  componentDidMount = () => {
    const { params } = this.props.navigation.state;

    if(params.accent !== null) {
      this.setState({accent: params.accent});
    };

    getTagImages(params.tag)
    .then(response => {
      this.setState({ data: response, }, () => {
        this.setState({ loading: false });
      });
    })
    .catch(e => console.log(`Error fetching the tag images: ${e}`));

  };


  renderItem = item => {
    if(item.images && item.images.length > 0){
      const image = item.images[0].link;
      //Return only images
      if(image.includes('png') || image.includes('jpg') || image.includes('jpeg')){
        return(
          <GalleryItem
            navigation = {this.props.navigation}
            item = {item}
            accent = {this.state.accent}
            image = {image}
          />
        ) 
      } 
    }
  };

  filterData = () => {
    return this.state.data.filter(element => element.title.toLowerCase().includes(this.state.searchString.toLowerCase()));
  };

  renderContent = () => {
    if(this.state.loading){
      return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size='large' color={Colors.secondary}/>
        </View>
      )
    }else{
      return(
        <FlatList
          data={this.filterData()}
          renderItem={({item}) => this.renderItem(item)}
          contentContainerStyle={{paddingHorizontal: 20, marginVertical:12}}
          scrollEventThrottle={16}
          windowSize={2}
        />
      )
    }
  }

  render() {
    return (
      <View style={Layouts.container}>
        <StatusBar backgroundColor={`#${this.state.accent}`}/>
        <SearchBar
            onChangeText={text => this.setState({searchString: text})}
            placeholder='Search a post'
            style={{
              marginTop:16,
              marginHorizontal:20,
              elevation:5,
            }}
          />
        {this.renderContent()}
      </View>
    )
  }
}
