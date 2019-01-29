import React from 'react';
import { View } from 'react-native';
import { styles } from '../helpers/styles';

function ProgressBar (props) {
  const { index, length } = props;
  let statusBarItems = [];

  const progressStatus = () => {
    let customClass;
    for (let i = 1; i <= length; i++) {
      if (index >= i) {
        customClass = styles.completedQuestion
      } else {
        customClass = styles.notCompletedQuestion
      }
      statusBarItems.push(<View style={[styles.progressBarItem, customClass]} key={i} />);
    }
    return statusBarItems;
  };

  return (
    <View style={styles.progressBar}>
      {progressStatus()}
    </View>
  )
}

export default ProgressBar;