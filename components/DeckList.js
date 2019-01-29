import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from '../helpers/styles';
import { connect } from 'react-redux';
import { getDecks } from '../helpers/functions';
import { receiveDecks } from '../actions';
import DeckItem from './DeckItem';

class DeckList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;

    getDecks().then((decks) => dispatch(receiveDecks(decks)));
  }

  deckSelected = (title) => {
    this.props.navigation.navigate(
      'Deck',
      {deckId: title}
    )
  }

  decksAmount = () => {
    return Object.keys(this.props.decks).length;
  }

  renderItem = ({item}) => {
    return (
      <DeckItem item={item} onDeckSelected={this.deckSelected}/>
    )
  }

  render() {
    const {decks} = this.props;
    const decksAmount = Object.keys(decks).length;

    const deckList = Object.entries(decks).map(
      (deck, index) => {
        return {title: deck[1].title, key: deck[1].title, questions: deck[1].questions, itemIndex: index, cover: deck[1].image}
      }
    )

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select a Deck</Text>
        <FlatList data={deckList} renderItem={this.renderItem}/>
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