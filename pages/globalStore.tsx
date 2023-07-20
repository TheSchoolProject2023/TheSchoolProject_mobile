import { create } from "zustand";

export const HOST = 'https://theschoolprojectapi.pythonanywhere.com';

export type user = {
    city: string,
    contact_no: string,
    country: string,
    created_at: string,
    date_of_birth: string,
    email: string,
    first_name: string,
    gender: string,
    id: string,
    image: string,
    last_name: string,
    middle_name: string,
    notificatuon_email: string,
    other_names: string,
    otp_enabled: boolean,
    region: string,
    signature: string,
    state: string,
    street: string,
    user_type: string,
}

export type userStatus = {
    token: string,
    isAuthenticated: boolean
}

type userState = {
    user?: user,
    setUser: (user:user) => void,
    userStatus?: userStatus,
    setUserStatus: (status:userStatus) => void
}

export type userDetails = {
    email: string,
    password: string
}

export type adminDashboardResponse = {
    administrators: number,
    current_month_total_expenses: number,
    guardians: number,
    staffs: number,
    students: number,
}

export const useGlobalStore = create<userState>((set)=>(
    {
        user: undefined,
        userStatus: undefined,
        setUser: (user:user) => set(() => ({
            user: user
        })),
        setUserStatus: (userStatus: userStatus) => set(()=>({
            userStatus: userStatus
        }))

    }
));