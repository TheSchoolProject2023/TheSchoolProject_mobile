import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { ImageBackground, View } from "react-native"

import { Button, IconButton, Text, TouchableRipple } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useQuery } from "react-query";
import { colors, admin_styles } from "../styles/style";
import { AccountsView, EditProfileView } from "./Account";
import { ClassroomView } from "./Classroom";
import { ExpenditureView } from "./Expenditure";
import { SafeArea, TableView } from "./Global";
import { useGlobalStore } from "./globalStore";
import { ParentsView } from "./Parents";
import { PaymentsView } from "./Payments";
import { ProductsView } from "./Products";
import { dashboard_request } from "./Requests";
import { StaffsView } from "./Staffs";
import { StudentsView } from "./Students";
import { SubjectsView } from "./Subjects";

const Drawer = createDrawerNavigator();

const DashBoardView = () => {

    const [first_name, last_name] =  useGlobalStore((state) => [state.user?.first_name, state.user?.last_name]);
    const { isLoading, data } = useQuery('dashboard', dashboard_request);
    let dashboard = data?.data;
    
    

    return (<View style={admin_styles.main_container}>
        <View style={admin_styles.welcome_card}><Text variant="titleMedium" style={admin_styles.welcome_card_text}>Welcome, <Text style={{ color: colors.darkPurple }}>{first_name}</Text></Text></View>
        <View style={admin_styles.card_container}>
            <View style={admin_styles.small_card}>
                <Text style={admin_styles.card_text}>{dashboard?.administrators}</Text>
                <Text style={admin_styles.card_text}>Administrators</Text>
            </View>
            <View style={[admin_styles.small_card, { backgroundColor: colors.customOrange }]}>
                <Text style={admin_styles.card_text}>{dashboard?.guardians}</Text>
                <Text style={admin_styles.card_text}>Guardians/Parents</Text>
            </View>
            <View style={[admin_styles.small_card, { backgroundColor: colors.customOrange }]} >
                <Text style={admin_styles.card_text}>{dashboard?.students}</Text>
                <Text style={admin_styles.card_text}>Students</Text>
            </View>
            <View style={admin_styles.small_card}>
                <Text style={admin_styles.card_text}>{dashboard?.staffs}</Text>
                <Text style={admin_styles.card_text}>Staffs</Text>
            </View>
            <View style={admin_styles.expenses_card}>
                <View>
                    <Text style={admin_styles.expenses_text} variant="titleLarge">Expenses
                        <Text style={{ fontSize: 12, color: colors.darkPurple }} >  (June, 2023)</Text> </Text>
                    <Text style={admin_styles.expenses_value_text}>#{dashboard?.current_month_total_expenses}</Text>
                </View>

                <TouchableRipple style={admin_styles.view_all_btn} >
                    <Text style={{ color: colors.white }}>View All</Text>
                </TouchableRipple>
            </View>

            <View style={admin_styles.profile_card}>
                <Button mode="contained">Setup 2FA</Button>
                <View style={admin_styles.inner_profile_container}>
                    <IconButton icon={'face-man'} size={50} iconColor={colors.darkPurple} />
                    <Text variant="titleMedium">{first_name} {last_name}</Text>
                </View>
                <Button mode="contained">Edit Profile</Button>

            </View>
        </View>

    </View>);
}

const AdminView = () => {

    const [first_name, last_name] =  useGlobalStore((state) => [state.user?.first_name, state.user?.last_name]);

    const insets = useSafeAreaInsets();

    const HeaderLeft = (navigation: any) => (<IconButton onPress={() => navigation.openDrawer()} iconColor={colors.darkPurple} icon={'menu'} />)
    const HeaderRight = () => (<IconButton iconColor={colors.darkPurple} icon={'magnify'} />)

    const drawerContentWithHeader = (props: DrawerContentComponentProps) => {

        return (<DrawerContentScrollView>
            <DrawerItem style={admin_styles.drawerHeaderProfile} label={(props) => (<ImageBackground  source={require('../assets/authbg.png')}>
                <View style={{ flexDirection: 'row', height: 80, alignItems: 'center', }}>
                    <IconButton iconColor={colors.white} icon='account-circle' />
                    <View >
                        <Text style={admin_styles.drawer_text}>{first_name} {last_name}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 20}}>
                            <Text style={admin_styles.drawer_subtext}>View your profile</Text>
                            <IconButton style={{margin:0}} iconColor={colors.white} icon='chevron-right' />

                        </View>
                    </View>

                </View>


            </ImageBackground>)} onPress={() => { props.navigation.navigate("Account")}} />

            <DrawerItem style={admin_styles.drawerHeader} label={(props) => (
                <Text style={admin_styles.drawerHeader_subtext}>Select an action below.</Text>
            )} onPress={() => { }} />
            <DrawerItemList  {...props} />
        </DrawerContentScrollView>)
    }

    return (
        <Drawer.Navigator drawerContent={drawerContentWithHeader} screenOptions={(route) => ({
            headerLeft: (props) => HeaderLeft(route.navigation
            ), headerRight: HeaderRight, drawerActiveTintColor: colors.customOrange, drawerInactiveTintColor: colors.darkPurple, drawerItemStyle: { height: 45, justifyContent: 'center' },
        })} >
            
            <Drawer.Screen name="DashBoard" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"view-dashboard"} />), headerTitleStyle: { color: colors.darkPurple } }} component={DashBoardView} />
            <Drawer.Screen name="Account" options={{drawerItemStyle: {display: 'none'}}} component={AccountsView} />
            <Drawer.Screen name="EditProfile" options={{drawerItemStyle: {display: 'none'}}} component={EditProfileView} />
            <Drawer.Screen name="Classroom" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"bullhorn"} />), headerTitleStyle: { color: colors.darkPurple } }} component={ClassroomView} />
            <Drawer.Screen name="Subjects" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"book-open-variant"} />), headerTitleStyle: { color: colors.darkPurple } }} component={SubjectsView} />
            <Drawer.Screen name="Students" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"account-group"} />), headerTitleStyle: { color: colors.darkPurple } }} component={StudentsView} />
            <Drawer.Screen name="Staffs" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"account-tie"} />), headerTitleStyle: { color: colors.darkPurple } }} component={StaffsView} />
            <Drawer.Screen name="Parents" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"account-supervisor"} />), headerTitleStyle: { color: colors.darkPurple } }} component={ParentsView} />
            <Drawer.Screen name="Expenditure" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"calendar-multiple"} />), headerTitleStyle: { color: colors.darkPurple } }} component={ExpenditureView} />
            <Drawer.Screen name="Products" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"briefcase-eye"} />), headerTitleStyle: { color: colors.darkPurple } }} component={ProductsView} />
            <Drawer.Screen name="Payments" options={{ drawerIcon: () => (<IconButton iconColor={colors.darkPurple} icon={"credit-card"} />), headerTitleStyle: { color: colors.darkPurple } }} component={PaymentsView} />
        </Drawer.Navigator>

    )
}

export { AdminView };