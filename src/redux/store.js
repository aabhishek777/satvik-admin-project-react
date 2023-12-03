import {configureStore} from '@reduxjs/toolkit'
import { adminReducer, loginReducer} from './reducer';

const store = configureStore({
	reducer: {
		login: loginReducer,
		admin:adminReducer
		}
})

export default store;