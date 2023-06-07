import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { MoodItemRow } from '../components/MoodItemRow';
import { useAppContext } from '../App.Provider';

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';
export const HomeScreen: React.FC = () => {
  const appContext = useAppContext();
  return (
    //   this thing do the same as below code
    // <View style={styles.container}>
    //   <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
    //   <View style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}>
    //     <MoodPicker handleSelectedMood={appContext.handleSelectMood} />
    //   </View>
    // </View>
    <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
      <MoodPicker handleSelectedMood={appContext.handleSelectMood} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
});
