import { createSlice } from '@reduxjs/toolkit';
import { setErrors } from './UI';
import { userAPI } from '../../Api/UserApi';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: true,
    success: true,
    failed: false,
  },
  reducers: {
    setUsers: (state,action) => {
        state.users = action.payload
        state.loading = true
    },
    loadingUsers: (state,action) => {
        state.loading = action.payload
    },
    success: (state,action) => {
        state.success = action.payload
    },
    failed: (state,action) => {
        state.failed = action.payload
    },
    edit: (state,action) => {
        const index = state.users.findIndex(item=> item.id == action.payload.id)
        if(index !== 1){
          state.users[index].username = action.payload.username;
          state.users[index].email = action.payload.Email;
        }
    },
    deleteUser: (state,action) => {
      const index = state.users.findIndex(item => item.id == action.payload.id)
      if(index !== -1){
        state.users.splice(index,1)
      }
    }
  },
});
export const selectState = state=> state.users

export const {setUsers,loadingUsers,success,deleteUser,failed,edit} = usersSlice.actions;

export default usersSlice.reducer;


export const usersAsync = _ => async (dispatch) => {
  try {
    dispatch(loadingUsers(false))
    const response = await userAPI.getUsers()
    dispatch(setUsers(response))
  } catch (error) {
    dispatch(loadingUsers(true))
    dispatch(setErrors({...error.response, message: 'Ошибка'}))
  }
};


export const deleteUserAsync = (id) => async (dispatch) => {
  try {
    dispatch(success(false))
    const {data} = await userAPI.deleteUser(id)
    dispatch(deleteUser(data))
    dispatch(success(true))
  } catch (error) {
    dispatch(success(true))
    dispatch(failed(true))
    setTimeout(() => {
      dispatch(failed(false))
    }, 2000);
  }
};


export const editUser = (id,username,Email) => async (dispatch)=> {

  try {
    dispatch(success(false))
    const {data} = await userAPI.updateUser(id,username,Email)
    setTimeout(() => {
      dispatch(edit({id,username,Email}))
      dispatch(success(true))
    }, 2000);

  } catch (error) {
    dispatch(success(true))
    dispatch(failed(true))
    setTimeout(() => {
      dispatch(failed(false))
    }, 2000);
  }

}



export const getUser = (userId) => async (dispatch) => {
  try {
    
  } catch (error) {
    
  }

}
