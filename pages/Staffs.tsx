import { FAB } from "react-native-paper";
import { colors, global_styles } from "../styles/style";
import { TableView } from "./Global";

const StaffsView = () => (<>
    <TableView tabledata={[{
        first_name: "David",
        last_name: "Akinfenwa",
        role: "Teacher",
        email: "davidakinfenw2@gmail.com",
        Phone_number: "+2348185415249",
        Date_of_birth: "4th of june, 2001d"
    }]} />
    <FAB icon="plus" color={colors.white} style={global_styles.fab} />
</>);
export { StaffsView };