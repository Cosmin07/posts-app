import {create} from 'zustand'

type State = {
    visible: boolean;
    selectedUserId: number
}

type Actions = {
    setVisible: (visible: boolean) => void;
    setSelectedUser: (selectedUserId: number) => void;
}

export const useUserDetailsModalStore = create<State & Actions>((set)=>({
    visible: false,
    selectedUserId: 0,
    setVisible: (visible:boolean)=>set(()=>({visible})),
    setSelectedUser: (selectedUserId:number)=>set(()=>({selectedUserId}))
}))