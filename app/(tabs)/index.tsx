import { Text, View, StyleSheet } from "react-native";
import  Image  from 'expo-image';
import Button from "@/components/Button";
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
    const [ selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const pickImageAsync = async() => {

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
    });

    if (!result.canceled) {
        setSelectedImage(result.assets[0].uri)
    } else {
        alert('Voce nao selecionou imagem');
    }
};

return (
    <View style={styles.container}>
    <Text>Estou fazendo teste</Text>
        <View style={styles.ImageContainer}>
            <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        <View style={styles.footerContainer}>
            <Button theme="primary" label="Escolha a foto" onPress={pickImageAsync} />
        </View>
    </View>
)


}
const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#45936c' ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
    },
    ImageContainer:{
        flex: 1
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
      }
      
});