import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity,} from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';

import { launchImageLibrary} from 'react-native-image-picker';

const CreateListing = ({ navigation }: any) => {

    const goBack = (): void => {
        navigation.goBack();
    }

    const uploadImage = async () => {
        const options: any = {};
        const result = await launchImageLibrary(options);    
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header showBack={true} onBackPress={goBack} title='Create a new Listing'> </Header>
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload Photos</Text>

                <TouchableOpacity onPress={uploadImage}>
                    <Text>+</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing);