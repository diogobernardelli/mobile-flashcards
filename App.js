import React from 'react';
import { View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import Deck from './components/Deck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import AppStatusBar from './components/AppStatusBar';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './helpers/colors';
import { styles } from './helpers/styles';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './helpers/notifications';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={colors.ASPHALT} barStyle="light-content" />
          <AppNavigation/>
        </View>
      </Provider>
    );
  }
}

const Tabs = TabNavigator({
  DeckList: {
      screen: DeckList,
      navigationOptions: {
          tabBarLabel: 'Deck list',
          tabBarIcon: <Ionicons size={25} name="ios-albums-outline"/>
      }
  },
  NewDeck: {
      screen: NewDeck,
      navigationOptions: {
          tabBarLabel: 'New deck',
          tabBarIcon: <Ionicons size={25} name="ios-add-circle-outline"/>
      }
  }
}, {
  tabBarOptions: {
      labelStyle: {
          fontSize: 14
      },
      style: {
          height: 56,
          backgroundColor: Platform.OS === 'ios' ? colors.WHITE : colors.ASPHALT,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
              width: 0,
              height: 3
          },
          shadowRadius: 6,
          shadowOpacity: 1
      }
  }
});

const AppNavigation = StackNavigator({
  Home: {
      screen: Tabs,
      navigationOptions: {
          header: null
      }
  },
  Deck: {
      screen: Deck,
      navigationOptions: {
          headerTintColor: colors.WHITE,
          headerStyle: {
              backgroundColor: colors.ASPHALT,
          }
      }
  },
  AddCard: {
      screen: AddCard,
      navigationOptions: {
          headerTintColor: colors.WHITE,
          headerStyle: {
              backgroundColor: colors.ASPHALT,
          }
      }
  },
  Quiz: {
      screen: Quiz,
      navigationOptions: {
          headerTintColor: colors.WHITE,
          headerStyle: {
              backgroundColor: colors.ASPHALT,
          }
      }
  }
});