import React, { useState } from 'react';
import { View, Text, ScrollView, Linking, Image, Pressable } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import EditableBox from '../../components/EditableBox';
import Button from '../../components/Button';

const Settings = () => {
    const [editing,setEditing] = useState(false);
    const [values, setValues] = useState({name:'user', email: 'user@gmail.com'})

    const onEditPress = (): void =>{
        setEditing(true);
    }

    const onSave = (): void =>{
        setEditing(false);
    }

    const onChange = (key:any, value: any) => {
        setValues(v => ({...v,[key]: value}));
    }

    const onItemPress = (): void => {
        Linking.openURL('https://google.com');
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title='Settings'> </Header>
            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader} >
                    <Text style={styles.secondTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../assets/edit.png')}></Image>
                    </Pressable>
                    
                </View>

                <EditableBox label='Name'  onChangeText={(v: any) => onChange('name', v)} value={values.name} editable={editing}></EditableBox>
                <EditableBox label='Email'  onChangeText={(v: any) => onChange('email', v)} value={values.email} editable={editing}></EditableBox>
                {editing ? (
                    <Button style={styles.button} onPress={onSave} title='Save'></Button>
                ): null}
                

                <Text style={[styles.secondTitle, {marginTop: 40}]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title='FAQ'></ListItem>
                <ListItem onPress={onItemPress} style={styles.item} title='Contact Us'></ListItem>
                <ListItem onPress={onItemPress} style={styles.item} title='Privacy & Terms'></ListItem>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings);