//Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//Screens
import HomeScreen from '../pages/HomeScreen';
import GalleryPage from '../pages/GalleryPage';
import Colors from '../styles/Colors';
import ImagePage from '../pages/ImagePage';

const stackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Gallery: {
    screen: GalleryPage,
  },
  Image: {
    screen: ImagePage,
  },
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(stackNavigator);