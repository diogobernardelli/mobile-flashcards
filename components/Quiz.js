import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../helpers/styles';
import { Card } from './Card';
import { Ionicons } from '@expo/vector-icons';
import { clearLocalNotification, setLocalNotification } from '../helpers/notifications';
import { NavigationActions } from 'react-navigation';

class Quiz extends Component {
  state = {
    deck: null,
    questions: [],
    currentQuestionIndex: 0,
    showQuestion: true
  };

  static navigationOptions = (props) => {
    return {
      title: 'Quiz',
      headerLeft: (
        <Button
          onPress={() => {
            Alert.alert(
              'Think about it..',
              'Are you sure you want to leave the Quiz?',
              [
                {
                  text: 'Continue',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'LEAVE',
                  onPress: () => {
                    props.navigation.pop(2)
                  }
                },
              ],
              {cancelable: false},
            );
          }}
          title="✘ leave"
          color="#fff"
        />
      ),
    }
  };

  componentDidMount() {
    const {navigation} = this.props;
    const deck = navigation.state.params.deck;

    const questions = deck.questions.map((question) => {
      return {
        question: question.question,
        answer: question.answer,
        correct: false
      }
    });

    this.setState({
      deck: deck,
      questions
    });

    clearLocalNotification()
      .then(setLocalNotification)
  }

  resetQuiz = () => {
    const questions = this.state.questions.map((question) => {
      return { question: question.question, answer: question.answer, correct: false }
    });

    this.setState({questions, currentQuestionIndex: 0, showQuestion: true});
  };

  handleButtons = (status) => {
    const questions = this.state.questions;
    questions[this.state.currentQuestionIndex].correct = status;

    this.setState({questions, currentQuestionIndex: this.state.currentQuestionIndex + 1, showQuestion: true});
  };

  toggleQuestion = () => {
    this.setState({showQuestion: !this.state.showQuestion});
  };

  render() {
    const { questions, currentQuestionIndex, showQuestion } = this.state;
    return (
      <View style={styles.container}>
        {questions.length > 0 &&
        currentQuestionIndex < questions.length &&
        <Card index={currentQuestionIndex}
              showQuestion={showQuestion}
              questions={questions}
              onQuestionPress={this.toggleQuestion}
              onButtonPress={this.handleButtons}
        />
        }
        {questions.length > 0 &&
        currentQuestionIndex >= questions.length &&
        <View style={styles.container}>
          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            {questions.filter(question => question.correct).length === questions.length &&
              <View style={styles.allCorrect}>
                <Ionicons size={60} style={styles.checkmarkIcon} name="ios-checkmark-circle"/>
                <Text style={styles.questionAnswer}>Congratulations!</Text>
              </View>
            }
            {questions.filter(question => question.correct).length !== questions.length &&
              <View style={styles.allCorrect}>
                <Ionicons size={60} style={styles.alertIcon} name="ios-alert"/>
                <Text style={styles.questionAnswer}>Oh...</Text>
              </View>
            }
            <Text style={styles.questionAnswer}>You've
              got {questions.filter(question => question.correct).length} out
              of {questions.length} questions correct
              ({Math.round(questions.filter(question => question.correct).length / questions.length * 100)}%).
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={[styles.button, styles.backToDeckButton]}
              onPress={() => this.props.navigation.pop(2)}>
              <Text style={[styles.buttonText]}>Back to Deck</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.resetQuiz}>
              <Text style={styles.buttonText}>Restart Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
        }
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz);