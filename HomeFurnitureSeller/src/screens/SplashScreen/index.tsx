import React from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Button";

function Splash({navigation}:any): React.JSX.Element {
    console.log('Navigation: ' + JSON.stringify(navigation));

    const onRegister = ():void => {
        navigation.navigate("Register");
    }

    const onLoging = ():void => {
        navigation.navigate("LogIn");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../assets/splash_image.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}> You'll find </Text>
                <Text style= {[styles.title, styles.innerTittle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <View style= {styles.buttonContainer}>
                <Button onPress={onRegister} title={"Sign Up"} />
            </View>

            <Pressable onPress={onLoging} hitSlop={20}>
                <Text style={styles.footerText}> Sing in</Text>
            </Pressable> 
        </SafeAreaView>
    );
}

export default React.memo(Splash);