import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCep } from '@/hooks/useBuscaCep';

export default function BuscaCEP() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

  function formatCep(value: string) {
    let onlyNumbers = value.replace(/\D/g, '');
    if (onlyNumbers.length > 8) {
      onlyNumbers = onlyNumbers.slice(0, 8);
    }
    if (onlyNumbers.length > 5) {
      return onlyNumbers.slice(0, 5) + '-' + onlyNumbers.slice(5);
    }
    return onlyNumbers;
  }

  function handleChange(text: string) {
    const formatted = formatCep(text);
    setCep(formatted);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Consulte seu CEP</Text>

      <TextInput
        style={styles.textInput}
        value={cep}
        onChangeText={handleChange}
        placeholder="Digite o CEP"
        placeholderTextColor="white" 
        keyboardType="numeric"
        maxLength={9}
      />

      <Text style={styles.text}>{cep}</Text>

      <Button title="Buscar" onPress={buscarCEP} />

      {endereco.logradouro !== '' && (
        <View style={styles.result}>
          <Text style={styles.text}>Logradouro: {endereco.logradouro}</Text>
          <Text style={styles.text}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.text}>Cidade: {endereco.localidade}</Text>
          <Text style={styles.text}>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d214f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    marginVertical: 10,
    color: 'white', 
  },
  result: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  text: {
    color: 'white', 
  },
});
