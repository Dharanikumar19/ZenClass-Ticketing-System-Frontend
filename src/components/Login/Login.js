import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import { Spinner, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {loginPending, loginSuccess, loginFail} from "./loginSlice"
import {userLogin} from "../../api/userApi"
import {useHistory} from "react-router-dom"
import {getUserProfile} from "../../pages/Dashboard/userAction";

function Login() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()

  const {isLoading, error} = useSelector(state => state.login)

  useEffect(() =>{
    sessionStorage.getItem("access_token") && 
    history.push("/dashboard")
  },[ history])


  const handleOnChange = e => {
    const {name, value} = e.target
    switch (name) {
      case "email":
        setEmail(value);
        break;

        case "password":
        setPassword(value);
        break;
    
      default:
        break;
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!email || !password){
      alert("Please fill all the Input feilds")
    }
    dispatch(loginPending())
    try {
      //login 
      const isAuth = await userLogin({email, password});
      if(isAuth.status === "error"){
        dispatch(loginFail(isAuth.message))
      }
      dispatch(loginSuccess())
      dispatch(getUserProfile())
      history.push("/dashboard")
    } catch (error) {
      dispatch(loginFail("Email Id or Password is Invalid"))
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex">

              </div>
              <div className="card-body p-4 p-sm-5">
                <h4 className="card-title text-center mb-5 fw-bold fs-5">Zen Class Student Login</h4>
                {error && <Alert variant='danger' className="text-center">{error}</Alert>}
                <form onSubmit={handleSubmit}> 

                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" placeholder="name@example.com" 
                    onChange={handleOnChange} value={email} required/>
                    <label >Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name="password" placeholder="Enter Password"
                    onChange={handleOnChange} value={password} required/>
                    <label >Password</label>
                  </div>
                  <Link to="/passwordReset" className="d-block mt-2 mb-2 small" href="#">Forgot Password ?</Link>
                  <p  className="d-block mt-4 mb-2 small" href="#">Mentor Login <Link to="/mentorLogin">Click here</Link></p>

                  <div className="d-grid mb-2">
                    <button className="btn btn-md mt-2 btn-primary btn-login text-uppercase" type="submit">Login</button>
                   <div className='text-center'> 
                   {isLoading && <Spinner variant='primary' animation="border" />}
                   </div>
                  </div>

                  <p className="d-block text-center mt-4 medium">Don't have an account ?<Link to="/register"> Register Now</Link></p>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
