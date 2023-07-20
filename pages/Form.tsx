import { ScrollView, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { colors, form_styles } from "../styles/style";

type FormType = {
    label: string,
    isOutlined: boolean,
    isPassword?: boolean,
    value?: string,
    isEditble?: boolean
};

const Form = ({ formStructure, title }: {
    formStructure:
    FormType[],
    title: string

}) => (<ScrollView style={form_styles.mainContainer}>
    <Text variant="titleLarge">{title}</Text>
    {formStructure.map((form) => (
        <TextInput style={form_styles.text_input} outlineColor={colors.darkPurple} underlineStyle={{height: 2}} underlineColor={colors.darkPurple} label={form.label} editable={form.isEditble} mode={form.isOutlined ? 'outlined' : 'flat'} defaultValue={form.value} placeholder={"Enter" + form.label} secureTextEntry={form.isPassword} />
    ))}
    <Button mode="elevated" style={form_styles.submit_btn} textColor={colors.white}>Submit</Button>
</ScrollView>);
export { Form, FormType };