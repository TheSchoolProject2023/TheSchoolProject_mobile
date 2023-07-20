import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { adminDashboardResponse, HOST, userDetails } from "./globalStore";


export const login_request = (loginDetails:userDetails) => axios.post(HOST + '/user/login/', loginDetails);
export const dashboard_request = () => axios.get<adminDashboardResponse>(HOST + '/school/dashboard/');
export const payment_request = () => axios.get(HOST + '/monetary/school/payment/all/');
export const student_request = () => axios.get(HOST + '/student/list/');