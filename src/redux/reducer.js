import { createReducer } from '@reduxjs/toolkit';

export const loginReducer = createReducer([], (builder) => {
  builder.addCase('LOGIN', (state, action) => {
    return { ...state, login: action.payload };
  });
 
});


export const adminReducer = createReducer({},builder => {
	builder.addCase("ADMIN_DATA",(state,action) => {
		state.adminData = action.payload;
	})
})
