import React, { Component } from 'react';
import { Text, StatusBar, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

//Components
import SearchBar from '../components/SearchBar';
import TagItem from '../components/TagItem';
import Icon from 'react-native-vector-icons/Ionicons';

//Styles
import Styles from '../styles/pages/Home';
import Layouts from '../styles/Layouts';
import Texts from '../styles/Texts';
import Colors from '../styles/Colors';
import { getTags } from '../services/Api';


export default class HomeScreen extends Component {

  state = {
    loading: true,
    sortBy: 0, //0 = by name, 1 = by followers
    data: null,
    searchString: '',
  };

  componentDidMount = () => {
    getTags()
    .then(response => {
      const tags = response.data.tags;
      this.setState({data: tags}, () => {
        this.setState({loading: false});
      });
    })
  };

  sortData = () => {
    switch(this.state.sortBy){
      case 0: 
        return this.state.data.sort((a, b) => a.display_name.localeCompare(b.display_name)).filter(element => element.display_name.toLowerCase().includes(this.state.searchString.toLowerCase()));
      case 1:
        return this.state.data.sort((a,b) => a.followers - b.followers).filter(element => element.display_name.toLowerCase().includes(this.state.searchString.toLowerCase()));
      case 2:
          return this.state.data.sort((a,b) => b.followers - a.followers).filter(element => element.display_name.toLowerCase().includes(this.state.searchString.toLowerCase()));
      default:
        return this.state.data;
    }
  }

  searchTag = text => {
    console.log(text);
    this.setState({searchString: text});
  }

  navigateToGallery = ({name, display_name, accent}) => {
    if(accent === null){
      accent = '291765';
    }
    this.props.navigation.navigate('Gallery', { tag: name, displayName: display_name, accent: accent})
  }

  renderItem = item => {
    return(
      <TagItem 
        onPress={() => this.navigateToGallery(item)}
        accent={item.accent}
        name={item.display_name}
        followers={item.followers}
      />
    )
  }

  renderList = () => {
    if(this.state.loading){
      return (
        <View style={{flex:1, justifyContent:'center', alignItems: 'center',}}>
          <ActivityIndicator size='large' color={Colors.secondary}/>
        </View>
      );
    } else {
      return(
        <View style={{flex: 1}}>
          <FlatList
            data={this.sortData()}
            renderItem={({item}) => this.renderItem(item)}
            contentContainerStyle={{padding:20}}
            keyExtractor= {item => item.index}
            windowSize={5}
          />
        </View>
      )
    }
  }

  render() {
    return(
      <View style={Layouts.container}>
        <StatusBar backgroundColor={Colors.statusBar}/>
        <View style={Styles.headerContainer}> 
          <Text style={Texts.pageTitle}>Imgur-K</Text>
          <View style={Styles.orderByContainer}>
            <Icon 
              name='md-funnel' 
              size={16}
              color={Colors.text.primaryLight}
            />
            <Text style={Texts.orderBy}>Sort tags by</Text>
          </View>
          <View style={Styles.filters}>
            <View style={Styles.filterContainer}>
              <TouchableOpacity 
                onPress = {() => this.setState({sortBy: 0})}
                activeOpacity={0.8}
                style={this.state.sortBy === 0 ? Styles.selectedFilterItem : Styles.unselectedFilterItem}
              >
                <Text style={Texts.selectedFilter}>Name</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress = {() => this.setState({sortBy: this.state.sortBy === 2 ? 1 : 2})}
                activeOpacity={0.5}
                style={this.state.sortBy === 1 || this.state.sortBy === 2 ? Styles.selectedFilterItem : Styles.unselectedFilterItem}
              >
                <Text style={Texts.unselectedFilter}>Followers</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <SearchBar
            onChangeText={text => this.searchTag(text)}
            placeholder='Search a tag'
            style={{
              marginTop: -28,
              marginHorizontal:20,
            }}
          />
        {this.renderList()}
      </View>
    )
  };
};


