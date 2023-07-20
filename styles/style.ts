import { StyleSheet } from 'react-native';

export const colors =  {
    white: 'white',
    darkPurple: "#311E69",
    veryLightPurple: '#a89fff1a',
    customOrange: '#FF6161',
    rippleLight: 'white',
    rippleDark: 'black',
    transparent: '#FF000020',
    lightGrey: '#EEEEEE',
    mediumGrey: "#BDBDBD"
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export const login_styles = StyleSheet.create({
    maincontainer: {
        paddingTop: 10,
        
        backgroundColor: colors.veryLightPurple,
        height: "100%"
    },
    welcome_text: {
        color: colors.darkPurple,
        fontFamily: 'Poppins_700Bold'

    },
    welcome_help_text: {
        color: colors.darkPurple,
        fontFamily: 'Poppins_300Light'

    },
    form: {
        paddingLeft:20,
        paddingRight:20,
    },
    bottomViewContainer: {
        backgroundColor: colors.darkPurple,
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
    ,
    textinput: {
        width: "100%",
        marginTop: 10,
        borderColor: colors.darkPurple,
        color: 'blue'
        
    },
    help_text: {
        color: colors.darkPurple,
        marginTop: 10,
        textAlign: 'center'
    },
    help_text_inner_bold: {
        fontWeight: 'bold',
        color: colors.darkPurple
    },
    signin_btn: {
        marginTop: 15,
        backgroundColor: colors.customOrange
    },
    other_options_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 10,
        
    },
    signin_google: {
        backgroundColor: colors.white,
        marginTop: 10,
    },
    forgot_password_btn: {
        backgroundColor: colors.white,
        marginTop: 10,

    },
    signup_btn: {
        backgroundColor: colors.white,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,

    },

    bannerText1: {
        color: colors.white
    },
    bannerText2: {
        color: colors.white,
        fontFamily: 'Poppins_700Bold'
    }

  });
  export const global_styles = StyleSheet.create({
    centerContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
    },
    date_btn: {
        borderRadius: 5,
        borderColor: colors.mediumGrey
    },
    filter_btn: {
        backgroundColor: colors.darkPurple,
        borderRadius: 5
    },
    download_btn: {
        backgroundColor: colors.customOrange,
        borderRadius: 5
    },
    search_input: {
        marginBottom: 5,
        backgroundColor: colors.lightGrey,
        flexGrow:1, 
        height: 40,
    },
    fab: {
        position: 'absolute',
        margin: 20,
        backgroundColor: colors.darkPurple,
        right: 0,
        bottom: 0
    }
  });
    
  
  export const admin_styles = StyleSheet.create({
    main_container: {
        backgroundColor: colors.white, 
        height: '100%'
    },
    welcome_card: {
        backgroundColor: colors.lightGrey,
        margin: 20,
        marginBottom: 10,
        padding: 20,
        borderRadius: 5,
    },
    welcome_card_text: {
        color: colors.customOrange
    },
    small_card: {
        borderRadius: 5,
        flexGrow: 1,
        backgroundColor: colors.darkPurple,
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        marginTop: 10
    },
    card_text: {
        color: colors.white

    },
    card_container: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        flexWrap: 'wrap'
    },
    expenses_card:{
        marginTop: 20,
        borderWidth: 1,
        borderRadius:5,
        padding: 20,
        paddingTop: 10,
        paddingRight: 10,
        flexBasis: '100%',
        borderColor: colors.mediumGrey,
        flexDirection: 'row'

    },

    
    view_all_btn: {
        marginLeft: 'auto',
        marginBottom: 'auto',
        backgroundColor: colors.darkPurple,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    expenses_text: {
        marginTop: 10,
        color: colors.darkPurple,
    },
    expenses_value_text: {
        marginTop: 5,
        color: colors.darkPurple

    },
    profile_card:{
        marginTop: 20,
        borderWidth: 1,
        borderRadius:5,
        padding: 20,
        paddingBottom: 10,
        flexBasis: '100%',
        borderColor: colors.mediumGrey,

    },
    inner_profile_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawerHeader: {
        height: 50,
        backgroundColor: colors.lightGrey,
        justifyContent: 'center',
    },
    drawerHeaderProfile: {
        height: 80,
        backgroundColor: colors.darkPurple,
        justifyContent: 'center',
    },
    drawer_text: {
        color: colors.white,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        flexShrink: 1
    },
    drawer_subtext: {
        color: colors.white,
        fontFamily: 'Poppins_400Regular',

    },
    drawerHeader_subtext: {
        color: colors.darkPurple,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        width: '110%'
    }
  });

export const account_styles = StyleSheet.create({
    mainContainer: {margin: 10},
    titleContainer: {
        flexDirection: 'row',
        backgroundColor: colors.lightGrey,
        borderRadius: 5,
        elevation: 2,
        shadowColor: colors.mediumGrey,
        padding: 10,
        paddingRight: 0
    },
    rightContainer: {
        marginLeft: 15
    },
    title: {
        fontWeight: "800",
        marginTop: 10,
        color: colors.customOrange
}   ,
    value: {
        marginTop: 5,
        color: colors.darkPurple

    },
    fab: {
        position: 'absolute',
        margin: 0,
        right: 0,
        bottom: 0
    }
});

export const form_styles = StyleSheet.create({
    mainContainer: {padding: 20},
    text_input: {
        marginTop: 15,
        backgroundColor: colors.lightGrey
    },
    submit_btn: {
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: colors.customOrange,
    }
});