import axios from 'axios';
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

	const dispatch = useDispatch();
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
	const navigate = useNavigate();
  const onSubmitHandler = async(e) => {
    e.preventDefault();
	  console.log(login);
	  
	  const result = await axios.post('https://stg.dhunjam.in/account/admin/login',{
		  username: login.username,
		  password: login.password,
	  });

	  if(result?.data?.response === 'Success') {
		  dispatch({type: 'LOGIN',payload: result?.data})
	     navigate('/dashboard')
	  }
  };
	
  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5 pt-5">
      <form onSubmit={onSubmitHandler} className="mt-5 pt-5" action="">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2>Venue Admin Login</h2>

          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Username"
            name="username"
            value={login.username}
          />
          <input
            onChange={onChangeHandler}
            className="h-full border"
            type="password"
            placeholder="Password"
            name="password"
            value={login.password}
          />
          <button type="submit">Sign In</button>
          <Link to="/registration">New Registration?</Link>
        </div>
      </form>
    </div>
  );
};
