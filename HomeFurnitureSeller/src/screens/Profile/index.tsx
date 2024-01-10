import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import Button from '../../components/Button';


const Profile = ({navigation}: any) => {
    const num = 10;

    const onLogout = (): void => {
        console.log('ola')
    }

    const onSettingsPress = () => {
        navigation.navigate('Settings');
    }

    const onNewListingPress = () => {
        navigation.navigate('CreateListing');
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <Header title='Profile' showLogout onLogout={onLogout}> </Header>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email</Text>

                    <ListItem title='My Listings' subtitle={`You have ${num} listings`}> </ListItem>
                    <ListItem onPress={onSettingsPress} title='Settings' subtitle={'Account, FAQ, Contact'}> </ListItem>
                </View>

                <Button onPress={onNewListingPress} style={styles.button} title='Add New Listing'></Button>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile);