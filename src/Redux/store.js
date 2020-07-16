import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './Slice/UI';
import usersSlice from './Slice/Users';
import UserInfo from '../components/UserInfo/UserInfo';
import userInfoSlice from './Slice/UserInfo';


export default configureStore({
  reducer: {
    UI: uiSlice,
    users: usersSlice,
    user: userInfoSlice
  },
});
