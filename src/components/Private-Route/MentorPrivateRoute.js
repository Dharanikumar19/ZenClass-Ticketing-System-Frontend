import React,{useEffect} from 'react'
import {Route, Redirect} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {loginSuccess} from "../Login/loginSlice"
import {getUserProfile} from "../../pages/Dashboard/userAction"
import MentorLayout from '../../layouts/MentorLayout'

function PrivateRoute({children, ...rest}) {
  const dispatch = useDispatch()
  const {isAuth} = useSelector((state) => state.login)
  const {user} = useSelector((state) => state.user)

  useEffect(() => {

		!user._id && dispatch(getUserProfile());


		!isAuth && sessionStorage.getItem("access_token") && dispatch(loginSuccess());
	}, [dispatch, isAuth,user._id ]);


  return (
    <Route {...rest} render={() => 
    (isAuth ? <MentorLayout>{children}</MentorLayout> : <Redirect to="/mentorLogin" />)} />
     
  )
}

export default PrivateRoute
