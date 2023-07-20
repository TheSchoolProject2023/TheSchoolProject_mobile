import { FAB } from "react-native-paper";
import { useQuery } from "react-query";
import { colors, global_styles } from "../styles/style";
import { TableView } from "./Global";
import { student_request } from "./Requests";

const StudentsView = () => {
    
    const {data} = useQuery('student',student_request);
    const student_data = data?.data?.results?.map((item:any)=>(
        {
            'First Name': item.student.user.first_name,
            'Last Name': item.student.user.last_name,
            'Date of Birth': item.student.user.date_of_birth,
            'Gender': item.student.user.gender,
            'Date Admitted': item.started,
            'Status': item.active ? 'Active' : 'Inactive'
        }
    )) || [];
    return (
        <>
            <TableView tabledata={student_data} />
            <FAB icon="plus" color={colors.white} style={global_styles.fab} />
        </>)
};
export { StudentsView };