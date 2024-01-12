import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, ActivityIndicator, KeyboardAvoidingView, } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';

import { launchImageLibrary } from 'react-native-image-picker';
import Input from '../../components/Input';

const CreateListing = ({ navigation }: any) => {

    const [images, setImages]: any = useState([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues]: any = useState({});

    const goBack = (): void => {
        navigation.goBack();
    }

    const onDeleteImage: any = (image: any): void => {
        setImages((list: any) => {
            const filteredImage = list.filter((img: any) => img?.fileName !== image?.fileName)
            return filteredImage;
        })
    }

    const onChange: any = (value: any, key: any): void => {
        setValues((val: any) => ({ ...val, [key]: value }));
    }

    const uploadImage: any = async () => {
        setLoading(true);
        const options: any = {};
        const result: any = await launchImageLibrary(options);

        if (result?.assets?.length) {
            setImages((list: any) => ([...list, ...result?.assets]));
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header showBack={true} onBackPress={goBack} title='Create a new Listing'> </Header>

            <KeyboardAvoidingView behavior='height'>
                <ScrollView style={styles.container}>
                    <Text style={styles.sectionTitle}>Upload Photos</Text>

                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map((image: any) => (
                            <View key={image?.fileName} style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: image?.uri }}></Image>
                                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.delete} source={require('../../assets/close.png')}></Image>
                                </Pressable>
                            </View>
                        ))}
                        {loading ? (
                            <ActivityIndicator></ActivityIndicator>
                        ) : null}

                    </View>

                    <View>
                        <Input placeholder='ListingTitle' label='Title' value={values.title} onChangeText={(v: any) => onChange(v, 'title')}></Input>
                        <Input placeholder='Select the Category' label='Category' value={values.category} onChangeText={(v: any) => onChange(v, 'category')} type='picker '></Input>
                        <Input placeholder='Enter Price in Euros' label='Price' value={values.price} onChangeText={(v: any) => onChange(v, 'price')} keyboardType='numeric'></Input>
                        <Input style={styles.textArea} placeholder='Tell us more...' label='Description' value={values.descritpion} onChangeText={(v: any) => onChange(v, 'description')} multiline ></Input>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);