import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';
import { connect } from 'react-redux';
import images from '../assets/images';
import { styles } from '../helpers/styles';

class StartQuiz extends Component {
  state = {
    width: new Animated.Value(0),
    height: new Animated.Value(0),
    opacity: new Animated.Value(0)
  };

  static navigationOptions = () => {
    return {
      title: '',
      headerLeft: (
        <View />
      ),
    }
  };

  componentDidMount() {
    const deck = this.props.navigation.state.params.deck;
    const { width, height, opacity } = this.state;
    
    Animated.parallel([
      Animated.timing(width, {toValue: 200, easing: Easing.bounce, duration: 1400}),
      Animated.timing(height, {toValue: 200, easing: Easing.bounce, duration: 1400}),
      Animated.timing(opacity, {toValue: 1, duration: 1000}),
    ])
    .start()

    setTimeout(() => {
      this.props.navigation.navigate(
        'Quiz',
        {deck: deck}
      )
    }, 2000)
  }

  render() {
    const { width, height, opacity} = this.state;
    
    return (
      <View style={[styles.goodLuck]}>
        <Animated.Image 
          style={[{width, height, opacity}]}
            // style={[styles.deckBackground, styles.deckBackgroundFullSize]}
            source={images.goodLuck}
        />
      </View>
    )
  }
}

export default connect()(StartQuiz);