import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';

import PizzaTranslator from './components/PizzaTranslator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color: "#fff",
        fontSize: 28,
      }}>
        Pizza Translator
      </Text>
      <PizzaTranslator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
  },
});