import React, { useCallback, useEffect, useState } from 'react';
import { createContext, FC } from 'react';
import { MoodOptionType, MoodOptionWithTimestamp } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AppData = {
  moodList: MoodOptionWithTimestamp[];
};
const dataKey = 'my-app-data';
const setAppData = async (data: AppData) => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(data));
  } catch (e) {
    console.error(e, 'Error saving data');
  }
};
const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(dataKey);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error(e, 'Error getting data');
    return null;
  }
};

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
});

export const AppProvider: FC<any> = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((mood: MoodOptionType) => {
    setMoodList(current => {
      const newMoodList = [...current, { mood, timestamp: Date.now() }];
      setAppData({ moodList: newMoodList }).then(r => {});
      return newMoodList;
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    };
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
