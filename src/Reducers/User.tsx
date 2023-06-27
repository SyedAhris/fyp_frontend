import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
    name: string;
    email: string;
    token: string;
    isSuper: boolean;
    password: string;
}

export interface UserSliceState {
    value: UserState;
}

interface LoginAction {
    type: string;
    payload: UserState;
}

const initialState: UserState = {
    name: '',
    email: '',
    token: '',
    isSuper: false,
    password: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state: UserState, action: LoginAction) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isSuper = action.payload.isSuper;
        }
    }
});
export const { login } = userSlice.actions;
export default userSlice.reducer;
