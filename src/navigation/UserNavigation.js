import {createStackNavigator} from 'react-navigation-stack';
import Register from '../screens/Register';
import Home from '../screens/Home';

const UserNavigation = createStackNavigator(
  {
    Register: {screen: Register},
    Home: {screen: Home}
  },
  {
    initialRouteName: 'Register',
    headerMode: 'none',
  },
);

export default UserNavigation;
