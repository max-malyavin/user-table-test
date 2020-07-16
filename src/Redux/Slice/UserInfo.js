import { createSlice } from '@reduxjs/toolkit';
import { userAPI } from '../../Api/UserApi';
import { setErrors } from './UI';

export const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    loading: true,
  },
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload
      state.loading = true
    } ,
    loadingUser: (state,action) => {
      state.loading = action.payload
  },
  },
});
export const selectState = state=> state.user

export const {setUser,loadingUser} = userInfoSlice.actions;

export default userInfoSlice.reducer;




export const getUser = (userId) => async (dispatch) => {
  try {
    dispatch(loadingUser(false))
    const response = await userAPI.getUser(userId)
    dispatch(setUser(response))
    dispatch(loadingUser(true))
  } catch (error) {
    dispatch(loadingUser(true))
    dispatch(setErrors({...error.response, message: 'Ошибка'}))
  }
}
