import React, { Component } from 'react';
import { Animated, Easing, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../helpers/styles';
import { colors } from '../helpers/colors';

export default class DeckListItem extends Component {
  state = {
    paddingTop: new Animated.Value(0),
    paddingBottom: new Animated.Value(0),
    marginLeft: new Animated.Value(200),
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    const { marginLeft, opacity } = this.state;
    const {item} = this.props;
    
    Animated.parallel([
      Animated.timing(marginLeft, {toValue: 0, delay: item.itemIndex * 100, easing: Easing.elastic(2), duration: 1000}),
      Animated.timing(opacity, {toValue: 1, delay: item.itemIndex * 100, duration: 1000}),
    ])
    .start()
  }

  deckAnimateOnPress(title, image, item) {
    const { paddingTop, paddingBottom } = this.state;
    Animated.parallel([
      Animated.spring(paddingTop, { toValue: 20, bounciness: 12, speed: 50}),
      Animated.spring(paddingBottom, { toValue: 20, bounciness: 16, speed: 50})
    ]).start(() => {
      paddingTop.setValue(0);
      paddingBottom.setValue(0);
      this.props.onDeckSelected(title, image, item);
    })
  }

  render() {
    const {item} = this.props;
    const backgroundColor = colors.CARDS_COLORS[item.itemIndex % colors.CARDS_COLORS.length];
    const { paddingTop, paddingBottom, marginLeft, opacity} = this.state;
    
    return (
      <Animated.View style={{marginLeft, opacity}}>
        <TouchableOpacity
          style={[styles.deck, {backgroundColor: backgroundColor}]}
          onPress={() => this.deckAnimateOnPress(item.title, item.cover, item)}>

          <Animated.View style={{
            paddingTop,
            paddingBottom,
          }}>
            <Text style={styles.deckTitle}>{item.title}</Text>
            <Text style={{color: colors.WHITE, opacity: .6}}>{item.questions.length} cards</Text>
          </Animated.View>
          {item.cover !== "" &&
            <Image
              style={styles.deckBackground}
              source={{uri: item.cover}}
            />
          }
        </TouchableOpacity>
      </Animated.View>
    )
  }
}