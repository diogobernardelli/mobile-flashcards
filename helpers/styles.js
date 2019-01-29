import { colors } from './colors';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.MIDNIGHT_BLUE,
    justifyContent: 'center'
  },
  title: {
    color: colors.WHITE,
    opacity: .8,
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 22,
    paddingBottom: 22
  },
  loader: {
    color: colors.WHITE
  },
  formLabel: {
    color: colors.WHITE,
    fontSize: 16,
    paddingBottom: 0,
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 12
  },
  formInput: {
    borderBottomColor: colors.GRAY,
    borderBottomWidth:  1,
    color: colors.GRAY,
    paddingBottom: 12,
    paddingLeft: 6,
    paddingTop: 6,
    marginLeft: 22,
    marginRight: 22,
    marginBottom: 30
  },
  button: {
    backgroundColor: colors.YELLOW_GREEN,
    borderRadius: 2,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 22,
    marginRight: 22,
    paddingBottom: 12,
    paddingTop: 12
  },
  buttonText: {
    color: colors.MIDNIGHT_BLUE,
    fontSize: 20,
    textAlign: 'center'
  },
  buttonTextWhite: {
    color: colors.WHITE
  },
  deck: {
    borderWidth: 0,
    paddingBottom: 18,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 18,
    overflow: 'hidden'
  },
  deckTitle: {
    color: colors.WHITE,
    fontSize: 30,
    paddingBottom: 3
  },
  deckBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    borderWidth: 4,
    height: '180%',
    width: '140%',
    opacity: .1
  },
  deckBackgroundFullSize: {
    height: '100%',
    width: '100%',
    opacity: .05
  },
  deckTitleView: {
    color: colors.WHITE,
    fontSize: 24,
    paddingBottom: 6
  },
  questionCount: {
    color: colors.DARK_GRAY,
    fontSize: 18
  },
  addCardButton: {
    flex: 1,
    backgroundColor: colors.BLUE,
    marginTop: 0,
    marginRight: 6
  },
  removeDeckButton: {
    flex: 1,
    backgroundColor: colors.RED,
    marginTop: 0,
    marginLeft: 6
  },
  noQuestions: {
    color: colors.WHITE,
    textAlign: 'center',
    fontSize: 20,
    padding: 22
  },
  quizDone: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkmarkIcon: {
    color: colors.GREEN,
    marginBottom: 12
  },
  alertIcon: {
    color: colors.RED,
    marginBottom: 12
  },
  backToDeckButton: {
    backgroundColor: colors.BLUE
  },
  questionAnswer: {
    color: colors.WHITE,
    textAlign: 'center',
    fontSize: 24,
    paddingBottom: 6,
    paddingLeft: 22,
    paddingRight: 22
  },
  toggleQuestionAnswer: {
    color: colors.YELLOW_GREEN,
    fontSize: 18
  },
  allCorrect: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  correctButton: {
    flex: 1,
    backgroundColor: colors.YELLOW_GREEN,
    marginRight: 6
  },
  incorrectButton: {
    flex: 1,
    backgroundColor: colors.RED,
    marginLeft: 6
  },
  actionButtons: {
    flexDirection: 'row'
  },
  progressBar: {
    height: 6,
    flexDirection: 'row'
  },
  progressBarItem: {
    flex: 1,
    height: 6
  },
  completedQuestion: {
    backgroundColor: colors.YELLOW_GREEN
  },
  notCompletedQuestion: {
    backgroundColor: colors.ASPHALT
  },
  progressNumbers: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  count: {
    color: colors.YELLOW_GREEN,
    padding: 12
  },
  goodLuck: {
    flex: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MIDNIGHT_BLUE,
  }
});