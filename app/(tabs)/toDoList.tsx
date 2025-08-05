import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '@/hooks/useTarefas';


export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Liste seus pedidos!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma tarefa..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <TouchableOpacity style={styles.botao} onPress={() => adicionarTarefa()}>
                     <Text style={styles.textoBotao}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}>🗑</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#0d214f' },
    titulo: { fontFamily: 'Roboto',fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color:'white', },
    inputContainer: { flexDirection: 'row', marginBottom: 10, },
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10,backgroundColor: 'white',  },
    tarefaContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, backgroundColor: 'white', borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 2, elevation: 2, marginBottom: 10,  },
    tarefaTexto: { fontSize: 20, },
    remover: { fontSize: 18, color: 'red' },
    botao: {backgroundColor: 'white',borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10, alignItems: 'center'},
    textoBotao: {color: 'black', fontSize: 16, fontWeight: 'bold',},
});


//flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginRight: 10,
