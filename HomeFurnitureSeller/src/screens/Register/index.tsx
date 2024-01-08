import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";

function Register(): React.JSX.Element {
    const [checked, setChecked] = useState(false);

    const onRegister = ():void => {
        console.log('ola');
    }; 

    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader title='Sign Up' />

            <Input label='Name' placeHolder='John Doe'></Input>
            <Input label='Email' placeHolder='example@gmai.com'></Input>
            <Input isPassword  label='Password' placeHolder='**********'></Input>

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeRowText}> I agree with <Text style={styles.agreeTextBold }>Terms</Text> & <Text style={styles.agreeTextBold} >Privacy.</Text></Text>
            </View>

            <Button style={styles.button} title="Sign Up" />

            <Seperator text='Or sign Up with'> </Seperator>

            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onRegister} style={styles.footerLink}> Log in</Text>
            </Text>
        </SafeAreaView>
    );
}

export default  React.memo(Register);