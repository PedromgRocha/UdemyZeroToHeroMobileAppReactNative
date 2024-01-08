import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";

function LogIn(): React.JSX.Element {

    const onLogIn = ():void => {
        console.log('ola');
    }; 

    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader title='Log In' />

            <Input label='Email' placeHolder='example@gmai.com'></Input>
            <Input isPassword  label='Password' placeHolder='**********'></Input>

            <Button style={styles.button} title="Log In" />

            <Seperator text='Or Log In with'> </Seperator>

            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onLogIn} style={styles.footerLink}> Register </Text>
            </Text>
        </SafeAreaView>
    );
}

export default  React.memo(LogIn);