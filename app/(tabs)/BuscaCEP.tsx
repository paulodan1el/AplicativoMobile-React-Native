import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCep } from '@/hooks/useBuscaCep'; // Importe o hook

export default function BuscaCEP() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

  // Função para formatar CEP com hífen após 5 números
  function formatCep(value: string) {
    let onlyNumbers = value.replace(/\D/g, ''); // remove tudo que não for número
    if (onlyNumbers.length > 8) {
      onlyNumbers = onlyNumbers.slice(0, 8);
    }
    if (onlyNumbers.length > 5) {
      return onlyNumbers.slice(0, 5) + '-' + onlyNumbers.slice(5);
    }
    return onlyNumbers;
  }

  // Função chamada no onChangeText que formata e atualiza o estado
  function handleChange(text: string) {
    const formatted = formatCep(text);
    setCep(formatted);
  }

  return (
    <View style={styles.container}>
      <Text>Consulte seu CEP</Text>

      <TextInput
        style={styles.textInput}
        value={cep}
        onChangeText={handleChange}  // usa a função com formatação
        placeholder="Digite o CEP"
        keyboardType="numeric"
        maxLength={9} // 8 números + 1 hífen
      />

      <Text>{cep}</Text>

      <Button title="Buscar" onPress={buscarCEP} />

      {endereco.logradouro !== '' && (
        <View style={styles.result}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>W
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
});
