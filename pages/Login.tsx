import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { ImageBackground, NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native"
import { Button, Snackbar, Text, TextInput, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMutation } from "react-query";
import { login_styles, colors } from "../styles/style";
import { SafeArea } from "./Global";
import { useGlobalStore } from "./globalStore";
import { login_request } from "./Requests";

const LoginView = ({ navigation }: { navigation: any }) => {

    //Global States
    const [setUser, setUserStatus] = useGlobalStore((state) => [state.setUser, state.setUserStatus]);

    
    const loginMutation = useMutation(login_request, {
        onSuccess(response, variables, context) {
            let data = response.data;
            navigation.push('Admin')

            let status = {
                token: data.access,
                isAuthenticated: true
            };
            axios.defaults.headers.common['Authorization'] = `Bearer ${status.token}`

            //Add user token and status to  local storage
            AsyncStorage.setItem('userStatus', JSON.stringify(status));
            setUserStatus(status);
            setUser(data.user)

        },
        onError(error, variables, context) {
            console.log(error);
            setshowErrorSnackbar(true)
        },
    });

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const { isLoading } = loginMutation;
    const [showErrorSnackbar, setshowErrorSnackbar] = useState(false);

    const insets = useSafeAreaInsets();

    return (
        <SafeArea insets={insets}>
            <View style={login_styles.maincontainer}>
                <View style={login_styles.form}>
                    <Text style={login_styles.welcome_text} variant="headlineMedium">Welcome!</Text>
                    <Text variant="bodyLarge" style={login_styles.welcome_help_text}>Login to continue</Text>
                    <TextInput outlineStyle={{ borderWidth: 2 }} outlineColor={colors.darkPurple} label={'Enter Email'} mode="outlined" placeholder="Enter Email" style={login_styles.textinput} onChangeText={(text) => {
                        setLoginDetails({ ...loginDetails, email: text })
                    }} />
                    <TextInput outlineStyle={{ borderWidth: 2 }} outlineColor={colors.darkPurple} label={'Enter your password'} mode="outlined" placeholder="Enter Password" style={login_styles.textinput} secureTextEntry={true} onChangeText={(text) => {
                        setLoginDetails({ ...loginDetails, password: text })
                    }} />
                    <Text variant="bodyMedium" style={login_styles.help_text}>By login in, You agree to our <Text style={login_styles.help_text_inner_bold} >Terms and Policies</Text></Text>
                    <Button onPress={() => {
                        loginMutation.mutate(loginDetails);

                    }} mode="contained" loading={isLoading} rippleColor={colors.rippleLight} style={login_styles.signin_btn}>Sign in </Button>
                    <View style={login_styles.other_options_container}>
                        <Button style={login_styles.forgot_password_btn} rippleColor={colors.rippleLight}>Forgot Password?</Button>
                        <Button style={login_styles.signin_google} icon={'google'} >Sign in with Google</Button>
                    </View>
                    <Button rippleColor={colors.rippleLight} style={login_styles.signup_btn} >Don't have an account yet? Sign up</Button>
                </View>


                <ImageBackground source={require('../assets/authbg.png')} style={login_styles.bottomViewContainer}>
                    <Text style={login_styles.bannerText1} variant="headlineMedium">The School</Text>
                    <Text style={login_styles.bannerText2} variant="displayMedium">PROJECT</Text>
                </ImageBackground>

                <Snackbar onIconPress={() => setshowErrorSnackbar(false)} visible={showErrorSnackbar} onDismiss={() => (setshowErrorSnackbar(false))} >Invalid Username and password</Snackbar>
            </View>

        </SafeArea>

    )
}

export { LoginView }