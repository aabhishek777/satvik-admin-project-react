import { createReducer } from '@reduxjs/toolkit';

export const loginReducer = createReducer([], (builder) => {
  builder.addCase('LOGIN', (state, action) => {
    return { ...state, login: action.payload };
  });
 
});
