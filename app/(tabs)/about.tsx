import { Text, View, StyleSheet} from 'react-native' ;

export default function AboutScreen () {
    return (
        <View style={styles.container}>
  <Text style={styles.text}>
    No <Text style={styles.bold}>Mercado Técnico</Text>, somos movidos por tecnologia e performance.
  </Text>
  <Text style={styles.text}>
    Nossa missão é oferecer as melhores peças e componentes para computadores — com qualidade, variedade e preços competitivos para gamers, entusiastas e profissionais de TI.
  </Text>
  <Text style={styles.text}>
    Contamos com uma equipe especializada para ajudar você na escolha ideal de produtos para upgrades, montagens e manutenções, com atendimento personalizado e suporte técnico.
  </Text>
  <Text style={styles.text}>
    🚀 Quer turbinar seu setup, montar um PC do zero ou encontrar aquela peça essencial? Estamos aqui para isso.
  </Text>
  <Text style={styles.highlight}>
    🔧 Mercado Técnico — Potencializando o seu desempenho.
  </Text>
</View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#45936c',
    },
    text: {
      textAlign: 'center',
      fontSize: 16,
      color: 'white',
      marginBottom: 15,
      lineHeight: 24,
    },
    highlight: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
    },
    bold: {
      fontWeight: 'bold',
    },
  });
  