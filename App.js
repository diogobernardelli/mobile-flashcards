import React from 'react';
import { View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import Deck from './components/Deck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import StartQuiz from './components/StartQuiz';
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
			tabBarIcon: ({ tintColor }) => <Ionicons size={25} style={{width: 25}} color={tintColor} name="ios-albums"/>
		}
  },
  NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			tabBarLabel: 'New deck',
			tabBarIcon: ({ tintColor }) => <Ionicons size={25} style={{width: 25}} color={tintColor} name="ios-add-circle"/>
		}
  }
}, {
  tabBarOptions: {
		activeTintColor: colors.YELLOW_GREEN,
		inactiveTintColor: colors.WHITE,
		labelStyle: {
			fontSize: 14,
		},
		style: {
			height: 56,
			backgroundColor: Platform.OS === 'ios' ? colors.ASPHALT : colors.ASPHALT,
			shadowColor: 'rgba(0, 0, 0, 0.24)',
			paddingTop: Platform.OS === 'ios' ? 10 : 0 ,
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
  },
  StartQuiz: {
		screen: StartQuiz,
		navigationOptions: {
			headerTintColor: colors.WHITE,
			headerStyle: {
				backgroundColor: colors.ASPHALT,
			}
		}
  }
});