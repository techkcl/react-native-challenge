import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native'
import { string, number, func} from 'prop-types' //Prop types

//Components
import Icon from 'react-native-vector-icons/Ionicons';

//Styles
import Colors from '../styles/Colors';

const TagItem = ({accent, name, followers, onPress}) => (
  <TouchableOpacity 
    onPress={onPress}
    style={styles.container}
    activeOpacity={0.8}
  >
      <View style={[styles.accentBar, { backgroundColor: `#${accent}` }]}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.followersContainer}>
          <Icon 
            name='md-people' 
            size={16}
            color={Colors.text.placeholder}
          />
          <Text style={styles.followers}>{followers} seguidores</Text>
        </View>
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff', 
    borderRadius: 4, 
    elevation: 1, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    marginTop: 8,
  },
  accentBar: {
    height:4,
    borderTopLeftRadius: 4, 
    borderTopRightRadius: 4,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontFamily: 'AirbnbCerealApp-Bold', 
    fontSize: 16,
  },
  followersContainer: {
    flexDirection: 'row', 
    marginTop: 12,
  },
  followers: {
    fontFamily: 'Larsseit', 
    color: Colors.text.placeholder, 
    marginLeft:8,
  },
});

TagItem.propTypes = { 
  accent: string,
  name: string,
  followers: number,
  onPress: func
};

export default TagItem