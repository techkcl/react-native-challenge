import { StyleSheet } from 'react-native'
import Colors from './Colors'

export default StyleSheet.create({
  pageTitle: {
    fontFamily:'AirbnbCerealApp-Bold',
    fontSize:28,
    color:Colors.text.light,
    paddingVertical:8,
  },
  orderBy: {
    fontFamily: 'Larsseit',
    color:Colors.text.primaryLight,
    marginLeft: 8,
  },
  searchBar: {
    fontFamily: 'Larsseit',
    fontSize:16,
    color:Colors.text.dark,
  },
  selectedFilter: {
    fontFamily:'AirbnbCerealApp-Bold',
    color: Colors.text.light,
  },
  unselectedFilter: {
    fontFamily:'Larsseit',
    color: Colors.text.light,
  },
  galleryItemTitle: {
    fontFamily:'AirbnbCerealApp-Bold',
    fontSize:16,
  },
  galleryItemDescription: { 
    fontFamily:'Larsseit',
    fontStyle: 'italic',
    marginTop: 4,
    color: Colors.text.placeholder,
  },
  imagePageTitle: {
    fontFamily:'AirbnbCerealApp-Bold',
    fontSize:24,
  },
  imageUps: {
    fontFamily:'AirbnbCerealApp-Bold',
    color: Colors.up,
    marginTop: 4,
    fontSize: 16,
  },
  imageDowns: {
    fontFamily:'AirbnbCerealApp-Bold',
    color: Colors.down,
    marginTop: 4,
    fontSize: 16,
  },
  imageViews: {
    fontFamily:'Larsseit',
    color: Colors.text.dark,
    marginLeft: 8,
    fontSize: 16,
  },
  commentTitle:{
    fontFamily:'AirbnbCerealApp-Bold',
    color: Colors.text.dark,
    fontSize: 14,
  },
  commentBody: {
    fontFamily:'Larsseit',
    color: Colors.text.dark,
    marginTop:4,
    fontSize: 16,
  }
});