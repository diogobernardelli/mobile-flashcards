import { colors } from './colors';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    color: colors.WHITE,
    opacity: .8,
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 22,
    paddingBottom: 22,
  },
  container: {
    flex: 1,
    backgroundColor: colors.MIDNIGHT_BLUE,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  formLabel: {
    fontSize: 16,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12
  },
  formInput: {
    borderColor: colors.GRAY,
    borderWidth:  Platform.OS === 'ios' ? 1 : 0,
    paddingBottom: 12,
    paddingLeft: 6,
    paddingTop: 12,
    marginLeft: 12,
    marginRight: 12
  },
  button: {
    backgroundColor: colors.BLUE,
    borderRadius: 2,
    margin: 12,
    paddingBottom: 12,
    paddingTop: 12
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 20,
    textAlign: 'center'
  },
  deck: {
    borderWidth: 0,
    paddingBottom: 18,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 18
  },
  deckTitle: {
    fontSize: 20,
    paddingBottom: 3,
    color: colors.WHITE
  },
  deckBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    borderWidth: 4,
    height: '200%',
    width: '200%',
    // opacity: .2
  }
});