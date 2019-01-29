import React, { Component } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as actions from '../actions';
import * as storage from '../helpers/api';
import { connect } from 'react-redux';
import { styles } from '../helpers/styles';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  static navigationOptions = ({navigation}) => {
    return {
      title: `Add card`
    }
  };

  submit = () => {
    if (this.state.question && this.state.answer) {
      const {dispatch, navigation} = this.props;

      dispatch(actions.addCardToDeck(navigation.state.params.deckId, this.state.question, this.state.answer));
      storage.addCardToDeck(navigation.state.params.deckId, this.state.question, this.state.answer)
      .then(() => {
        this.setState({question: '', answer: ''});
        Keyboard.dismiss();
        this.props.navigation.navigate('Deck', {deckId: this.props.navigation.state.params.deckId});
      })
    }
    else {
      alert('All fields are required!');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add card to { this.props.navigation.state.params.deckId } deck</Text>

        <View style={{flex: 2}}>
          <Text style={styles.formLabel}>Question *</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
          />
          <Text style={styles.formLabel}>Answer *</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.submit}>
            <Text style={styles.buttonText}>Add card</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(AddCard);