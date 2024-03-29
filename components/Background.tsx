import React from 'react';
import { View, StyleSheet } from 'react-native';

const DarkBackgroundComponent = () => {
  return (
    <View style={styles.container}>
      {/* Your content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Set background color to black for a dark background
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DarkBackgroundComponent;
