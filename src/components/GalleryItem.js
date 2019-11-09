import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native'
import { string, object, } from 'prop-types' //Prop types

//Styles
import Texts from '../styles/Texts';

const GalleryItem = ({ navigation, item, accent, image }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Image', {item: item, accent: accent})}
      activeOpacity={0.6}
      style={styles.container}
    >
      <View style={{flex:2, padding:16, }}>
        <Text numberOfLines={3} style={Texts.galleryItemTitle}>{item.title}</Text>
        <Text numberOfLines={3} style={Texts.galleryItemDescription}>{item.description || 'No description provided.'}</Text>
      </View>
      <View style={{flex:3}}>
        <Image key={image} source={{uri: image}} style={styles.image}/>
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff', 
    elevation:2, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,  
    borderRadius: 4,
    marginTop:8, 
    flexDirection:'row', 
    height: 150
  }, 
  image: {
    width:'100%', 
    height:'100%', 
    borderBottomRightRadius: 4, 
    borderTopRightRadius: 4
  }
});

GalleryItem.propTypes = { 
  navigation: object,
  item: object,
  accent: string
};

export default GalleryItem