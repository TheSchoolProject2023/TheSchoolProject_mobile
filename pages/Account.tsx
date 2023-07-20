import { Avatar, Chip, FAB, IconButton, Portal, Text, Title } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { account_styles, colors, global_styles } from "../styles/style";
import { useState } from "react";
import { Form, FormType } from "./Form";
import { useGlobalStore } from "./globalStore";

const AccountsView = ({navigation}: {navigation: any}) => {
    const user = useGlobalStore((state)=>state.user);
    const [FabGroupOpen, setFabGroupOpen] = useState(false);
    const onFabStateChanged = ({ open }: {open:boolean}) => setFabGroupOpen(open); 

    return(
    <ScrollView >
        <View style={account_styles.mainContainer}>
            <View style={account_styles.titleContainer}>
                <Avatar.Image source={{uri: user?.image}} size={120} />
                <View style={account_styles.rightContainer}>
                    <Text style={account_styles.title}>
                        First Name
                    </Text>
                    <Text style={account_styles.value} variant="titleMedium">
                        {user?.first_name}
                    </Text>
                    <Text style={account_styles.title}>
                        Last Name
                    </Text>
                    <Text style={account_styles.value} variant="titleMedium">
                        {user?.last_name}
                    </Text>
                </View>
                <IconButton icon="check-decagram" style={{ marginLeft: 'auto' }} iconColor={colors.customOrange} />

            </View>
            <View style={[account_styles.titleContainer, { flexDirection: 'column', marginTop: 10 }]}>
                <Text style={account_styles.title}>
                    Email
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                    {user?.email}
                </Text>
                <Text style={account_styles.title}>
                    Gender
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                    {user?.gender}
                </Text>
                <Text style={account_styles.title}>
                    Date of birth
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                    {user?.date_of_birth}
                </Text>
                <Text style={account_styles.title}>
                    Country
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                    {user?.country}
                </Text>
                <Text style={account_styles.title}>
                    Phone Number
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                    {user?.contact_no}
                </Text>
                <Text style={account_styles.title}>
                    Region
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                   {user?.region}
                </Text>
                <Text style={account_styles.title}>
                    Country
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                   {user?.country}
                </Text>
                <Text style={account_styles.title}>
                    State
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                   {user?.state}
                </Text>
                <Text style={account_styles.title}>
                    City
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                   {user?.city}
                </Text>
                <Text style={account_styles.title}>
                    Street
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                   {user?.street}
                </Text>
                
                <Text style={account_styles.title}>
                    OTP Enabled
                </Text>
                <Text style={account_styles.value} variant="titleMedium">
                    {user?.otp_enabled ? 'Yes' : 'NO'}
                </Text>
            </View>
        </View>

            <FAB.Group  fabStyle={{backgroundColor: colors.customOrange}} open={FabGroupOpen} onStateChange={onFabStateChanged} visible actions={[{
                icon: 'account-edit',
                label: 'Edit Profile',
                onPress: () => {
                    navigation.navigate("EditProfile")
                }
            },
            {
                icon: 'account-key',
                label: 'Change Password',
                onPress: () => {

                }
            },
            {
                icon: 'account-cog',
                label: 'Setup 2FA',
                onPress: () => {

                }
            },
            ]} icon={FabGroupOpen ? "close" : "pencil"} color={colors.white} style={account_styles.fab} />

    </ScrollView>
)};

const EditProfileView = () => {
    const user = useGlobalStore((state)=>state.user);

    const form: FormType[] = [
        {
            label: "First Name",
            isOutlined: true,
            value: user?.first_name
        },
        {
            label: "Last Name",
            isOutlined: true,
            value: user?.last_name
        },
        {
            label: "Email",
            isOutlined: true,
            value: user?.email
        },
        {
            label: "Contact Number",
            isOutlined: true,
            value: user?.contact_no
        },
        {
            label: "Gender",
            isOutlined: true,
            value: user?.gender
        },
    ]
    return (<>
    <Form title="Edit Your Profile" formStructure={form} />
    </>);
}


export { AccountsView, EditProfileView };