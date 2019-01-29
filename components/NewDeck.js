import React, { Component } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as actions from '../actions';
import * as storage from '../helpers/api';
import { connect } from 'react-redux';
import { styles } from '../helpers/styles';

class NewDeck extends Component {
  state = {
    title: '',
    image: '',
    questions: []
  };

  submit = () => {
    if (this.state.title) {
      const {dispatch} = this.props;

      dispatch(actions.addDeck(this.state.title, this.state.image));
      storage.addDeck(this.state.title, this.state.image);

      this.setState({title: ''});
      Keyboard.dismiss();
      this.props.navigation.navigate('Deck', {deckId: this.state.title, deck: this.state});
    }
    else {
      alert('Title field is required!');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add a new deck</Text>

        <View style={{flex: 2}}>
          <Text style={styles.formLabel}>Deck name *</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
          />

          <Text style={styles.formLabel}>Image URL</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(image) => this.setState({image})}
            value={this.state.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.submit}>
            <Text style={styles.buttonText}>Add deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
}

export default connect()(NewDeck);