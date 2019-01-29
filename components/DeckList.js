import React, { Component } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { styles } from '../helpers/styles';
import { connect } from 'react-redux';
import { getDecks } from '../helpers/api';
import { receiveDecks } from '../actions';
import DeckItem from './DeckItem';

class DeckList extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    const {dispatch} = this.props;
    
    getDecks()
      .then((results) => dispatch(receiveDecks(results)))
      setTimeout(() => {
        this.setState(() => ({ready: true}))
      }, 1500);
  }

  deckSelected = (title, image, deck) => {
    this.props.navigation.navigate(
      'Deck',
      {
        deckId: title,
        deckCover: image,
        deck: deck
      }
    )
  }

  decksAmount = (toCount) => {
    return Object.keys(toCount).length;
  }

  renderItem = ({item}) => {
    return (
      <DeckItem item={item} onDeckSelected={this.deckSelected}/>
    )
  }

  render() {
    const {decks} = this.props;

    const deckList = Object.entries(decks).map(
      (deck, index) => {
        return {title: deck[1].title, key: deck[1].title, questions: deck[1].questions, itemIndex: index, cover: deck[1].image}
      }
    )

    return (
      <View style={styles.container}>
        {this.state.ready
        ?
        <View style={{flex: 1}}>
          {(this.decksAmount(decks) !== 0)
          ?
          <View>
            <Text style={styles.title}>Select a Deck</Text>
            <FlatList data={deckList} ready={this.state.ready} renderItem={this.renderItem}/>
          </View>
          :
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Looks like you ran out of decks. Add a new deck to continue</Text>
          </View>
          }
        </View>
        : <ActivityIndicator size="large" style={styles.loader} />}
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);