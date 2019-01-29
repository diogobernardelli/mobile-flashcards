import React, { Component } from 'react';
import { Animated, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../helpers/styles';
import { colors } from '../helpers/colors';

export default class DeckListItem extends Component {
  state = {
    rotateX: new Animated.Value(0),
    opacity: new Animated.Value(1)
  };

  deckSelected(title) {
    Animated.parallel([
      Animated.timing(this.state.rotateX, {
          toValue: 360,
          duration: 750
      })
    ]).start(() => {
      this.setState({rotateX: new Animated.Value(0), opacity: new Animated.Value(1)});
      this.props.ondeckSelected(title);
    })
  }

  render() {
    const {item, deckAmount} = this.props;
    const resizeMode = 'center';
    const backImage = require(`../assets/back01.png`);
    console.log("====>", backImage);
    
    return (
      <TouchableOpacity
        style={[styles.deck, {backgroundColor: colors.CARDS_COLORS[item.itemIndex]}]}
        onPress={() => this.deckSelected(item.title)}>

        <Animated.View style={{
          opacity: this.state.opacity,
          transform: [
            {
              rotateX: this.state.rotateX.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg']
              })
            },
            {perspective: 1000}
          ]
        }}>
          <Text style={styles.deckTitle}>{item.title}</Text>
          <Text style={{color: colors.WHITE, opacity: .6}}>{item.questions.length} cards</Text>
        </Animated.View>
        <Image
          style={styles.deckBackground}
          source={{ uri: `asset:/images/${item.cover}` }}
        />
      </TouchableOpacity>
    )
  }
}