import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../helpers/styles';
import * as actions from '../actions';
import * as storage from '../helpers/api';

class Deck extends Component {
  state = {
    deck: null,
  };

  static navigationOptions = ({navigation}) => {
    const {deckId, deckCover} = navigation.state.params;
    return {
      title: deckId,
      image: deckCover
    }
  };

  componentDidMount() {
    const {navigation} = this.props;
    const deckId = navigation.state.params.deckId;

    storage.getDeck(deckId)
      .then(deck => {
        this.setState({deck: deck});
      })
  }

  removeDeckAlert(title) {
    Alert.alert(
      'Hey,',
      'Are you sure you wish to delete this deck?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => this.removeDeckAction(title)
        },
      ],
      {cancelable: false},
    );
  }

  removeDeckAction(title) {
    const {dispatch} = this.props;

    storage.removeDeck(title)
    .then(decks => {
      dispatch(actions.removeDeckAction(decks));
      this.props.navigation.navigate('DeckList');
    })

  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.deck &&
          <View style={{flex: 1}}>
            <View style={{flex: 0.8, justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text style={styles.deckTitleView}>{this.state.deck.title}</Text>
              <Text style={styles.questionCount}>{this.state.deck.questions.length} cards</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              { this.state.deck.questions.length > 0 &&
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate(
                    'StartQuiz',
                    {deck: this.state.deck}
                  )}>  
                    <Text style={styles.buttonText}>Start quiz</Text>
                </TouchableOpacity>
              }
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.button, styles.addCardButton]}
                  onPress={() => this.props.navigation.navigate(
                    'AddCard',
                    {deckId: this.state.deck.title}
                  )}>
                  <Text style={styles.buttonText}>Add card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.removeDeckButton]}
                  onPress={() => this.removeDeckAlert(this.state.deck.title
                  )}>
                  <Text style={[styles.buttonText, styles.buttonTextWhite]}>Delete Deck</Text>
                </TouchableOpacity>
              </View>
            </View>
            {this.state.deck.image !== "" &&
              <Image
                style={[styles.deckBackground, styles.deckBackgroundFullSize]}
                source={{uri: this.state.deck.image}}
              />
            }
          </View>
        }
      </View>
    );
  }
}

function mapStateToProps(decks) {
    return {
      decks
    }
}

export default connect(mapStateToProps)(Deck);