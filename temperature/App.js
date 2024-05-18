import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('F');

  const convertTemperature = () => {
    if (scale === 'F') {
      return ((parseFloat(temperature) - 32) * 5) / 9;
    } else {
      return (parseFloat(temperature) * 9) / 5 + 32;
    }
  };

  const getBackgroundColor = () => {
    const convertedTemp = convertTemperature();
    if (convertedTemp > 30) {
      return '#ff6961'; // Red background if converted temperature is high
    } else if (convertedTemp <= 32) {
      return '#3498db'; // Blue background if converted temperature is low or equal to 32
    } else {
      return '#ecf0f1'; // Default background color
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.title}>Temperature Converter</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTemperature(text)}
          value={temperature}
          keyboardType="numeric"
          placeholder="Enter temperature"
        />
        <TouchableOpacity
          style={styles.scaleButton}
          onPress={() => setScale(scale === 'F' ? 'C' : 'F')}
        >
          <Text style={styles.scaleButtonText}>Switch to {scale === 'F' ? 'Celsius' : 'Fahrenheit'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>
        {scale === 'F' ? 'Celsius: ' : 'Fahrenheit: '}
        {convertTemperature().toFixed(2)}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  scaleButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  scaleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
