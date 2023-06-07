import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../App.Provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const HistoryScreen: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <FlatList
        data={appContext.moodList}
        keyExtractor={item => item.timestamp.toString()}
        renderItem={({ item }) => (
          <MoodItemRow item={item} key={item.timestamp} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
