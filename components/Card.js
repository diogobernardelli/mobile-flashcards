import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../helpers/styles';
import ProgressBar from '../components/ProgressBar';

export function Card(props) {
  const {index, showQuestion, questions, onQuestionPress, onButtonPress} = props;
  const question = questions[index].question;
  const answer = questions[index].answer;

  return  (
    <View style={styles.container}>
      <ProgressBar index={index + 1} length={questions.length} />
      <View style={styles.progressNumbers}>
        <Text style={ styles.count }>{index + 1} / {questions.length}</Text>
      </View>

      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        {showQuestion &&
          <Text style={styles.questionAnswer}>{question}</Text>
        }

        {!showQuestion &&
          <Text style={styles.questionAnswer}>{answer}</Text>
        }

        <TouchableOpacity
          onPress={onQuestionPress}>
          <Text style={styles.toggleQuestionAnswer}>Show { showQuestion ? 'Answer' : 'Question' }</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.button, styles.correctButton]}
          onPress={() => onButtonPress(true)}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.incorrectButton]}
          onPress={() => onButtonPress(false)}>
          <Text style={[styles.buttonText, styles.buttonTextWhite]}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
