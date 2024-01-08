import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";


function LogIn({ navigation }: any): React.JSX.Element {

    const goToRegister = (): void => {
        navigation.navigate('Register');
    };

    const onBackPress = (): void => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <ScrollView  style={styles.container}>
                <AuthHeader onBackPress={onBackPress} title='Log In' />

                <Input label='Email' placeHolder='example@gmai.com'></Input>
                <Input isPassword label='Password' placeHolder='**********'></Input>

                <Button style={styles.button} title="Log In" />

                <Seperator text='Or Log In with'> </Seperator>

                <GoogleLogin></GoogleLogin>

                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text onPress={goToRegister} style={styles.footerLink}> Register </Text>
                </Text>
            </ScrollView>

        </SafeAreaView>
    );
}

export default React.memo(LogIn);