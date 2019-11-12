import React, { Component, Fragment} from 'react'
import { Text, Image, View, ActivityIndicator, ScrollView, FlatList } from 'react-native'

//Services
import { getImageComments } from '../services/Api'

//Components
import Icon from 'react-native-vector-icons/Ionicons';

//Styles
import Colors from '../styles/Colors';
import Layouts from '../styles/Layouts';
import Texts from '../styles/Texts';
import CommentItem from '../components/CommentItem';

export default class ImagePage extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
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
    data: null,
    loading: true,
    comments: null,
    loadingComments: true,
  };

  componentDidMount = () => {
    const { params } = this.props.navigation.state;

    //Informacion del post
    this.setState({ data: params.item}, () => {
      this.setState({loading: false})
    });

    //Comentarios
    getImageComments(params.item.id)
    .then(response => { 
      this.setState({comments: response}, () => {
        this.setState({loadingComments: false});
      });
    });
    
  };

  renderLoading = () => {
    return(
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={Colors.secondary} size='large'/>
      </View>
    )
  };

  renderComments = () => {
    if(this.state.loadingComments){
      return(
        <ActivityIndicator size='large' color={Colors.secondary} />
      )
    }else{
      return(
        <FlatList
          scrollEventThrottle={16}
          scrollEnabled={false}
          data={this.state.comments}
          contentContainerStyle={{marginTop: -12}}
          renderItem = {({item}) => this.renderComment(item)}
        />
      )
    }
  }

  renderComment = ({author, comment}) => {
    return(
      <CommentItem
        name={author}
        comment={comment}
      />
    )
  }

  renderContent = () => {
    if(this.state.loading){
      return this.renderLoading();
    }else{
      const item = this.state.data;
      return(
        <View>
          <View style={{height:400, backgroundColor:'#000'}}>
            <Image source={{uri: item.images[0].link}} resizeMode='contain' style={{height:400}}/>
          </View>
          <View style={{padding:20}}>
            <Text style={Texts.imagePageTitle}>{item.title}</Text>
            <Text style={Texts.galleryItemDescription}>{item.description || 'No description provided.'} </Text>
            <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center'}}>
              <Icon 
                  name='md-eye' 
                  size={24}
                  color={Colors.text.dark}
              />
              <Text style={Texts.imageViews}>{item.views} views</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 24}}>
              <View style={{flex:1, alignItems: 'center'}}> 
                <Icon 
                  name='md-thumbs-up' 
                  size={24}
                  color={Colors.up}
                />
                <Text style={Texts.imageUps}>{item.ups} upvotes</Text>
              </View>
              <View style={{flex:1, alignItems: 'center'}}> 
                <Icon 
                  name='md-thumbs-down' 
                  size={24}
                  color={Colors.down}
                />
                <Text style={Texts.imageDowns}>{item.downs} downvotes</Text>
              </View>
            </View>
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={Layouts.container}>
        <ScrollView scrollEventThrottle={16} style={{flex:1}}>
          {this.renderContent()}
          {this.renderComments()}
        </ScrollView>
      </View>
    )
  };
}
