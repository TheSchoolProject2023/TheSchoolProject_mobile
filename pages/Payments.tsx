import { FAB } from "react-native-paper";
import { useQuery } from "react-query";
import { colors, global_styles } from "../styles/style";
import { TableView } from "./Global";
import { payment_request } from "./Requests";

const PaymentsView = () => {
    
    const {data} = useQuery('Payment',payment_request);
    const payments = data?.data.results.map((item:any)=>(
        {
            'Amount(#)': item.amount,
            'Status': item.status,
            'Payment Type': item.payment_type,
            'Payment Provider': item.payment_provider,
            'Date Paid': item.created_at,
        }
    )) || [];
    return (
        <>
            <TableView tabledata={payments} />
            <FAB icon="plus" color={colors.white} style={global_styles.fab} />
        </>)
};
export { PaymentsView };