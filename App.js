import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const NumberSumApp = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculateSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(`Sum: ${sum}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter a number"
        onChangeText={(text) => setNum1(text)}
        value={num1}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Enter another number"
        onChangeText={(text) => setNum2(text)}
        value={num2}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <Button title="Calculate Sum" onPress={calculateSum} />
      <Text>{result}</Text>
    </View>
  );
};

export default NumberSumApp;
