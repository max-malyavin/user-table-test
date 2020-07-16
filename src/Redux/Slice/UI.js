import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    errors: [],
    loading: false
  },
  reducers: {
    setErrors: (state,action) => {
        state.errors = [action.payload]
    },
    loadingUi: (state,action) => {
      state.loading = action.payload
    }

  },
});


export const { setErrors, loadingUi} = uiSlice.actions;

export default uiSlice.reducer;



