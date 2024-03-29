import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import ActionCard from './ActionCard';
import DarkBackgroundComponent from './components/Background';
import {Appearance} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
      <ActionCard/>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
