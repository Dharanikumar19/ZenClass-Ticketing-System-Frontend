import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"
import {newUserRegistration} from "./registerAction";
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const initialState = {
  name : "",
  email: "",
  batch: "",
  phone: "",
  password: "",
  confirmPassword: "",
}

const passwordVerification = {
  isLength: false,
  confirmPassword: false
}

function Register() {
  const dispatch = useDispatch()
  const {status, message} = useSelector(state => state.registration)

  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passwordVerification);

  useEffect(() => {
    return () => {}
  }, [newUser])

  const handleOnChange = e => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })

    if (name === "password") {
      const isLength = value.length >= 8
      setPasswordError({
        ...passwordError, isLength
      })
    }
    if (name === "confirmPassword") {
      setPasswordError({
        ...passwordError, confirmPassword: newUser.password === value,
      })
    }
  }



  const handleSubmit = e => {
    e.preventDefault()
    dispatch(newUserRegistration(newUser))
  }

  return (
    <>
      <div className="register-container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex">

              </div>
              <div className="card-body p-4 p-sm-5">
                <h4 className="card-title text-center mb-5 fw-bold fs-5">Register</h4>
                <form onSubmit={handleSubmit}>
                  <div>
                    {message && <Alert variant={status === "success" ? "success" : "danger"} className="text-center">{message}</Alert>}
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='name' placeholder="username"
                      onChange={handleOnChange} value={newUser.name} />
                    <label>User Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name='email' placeholder="name@example.com"
                      onChange={handleOnChange} value={newUser.email} />
                    <label>Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name='batch' placeholder="Batch name"
                      onChange={handleOnChange} value={newUser.batch} />
                    <label>Batch Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" name='phone' placeholder="Phone Numer"
                      onChange={handleOnChange} value={newUser.phone} />
                    <label>Phone Number</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name='password' placeholder="Password"
                      onChange={handleOnChange} value={newUser.password} />
                    <label>Enter Password</label>
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name='confirmPassword'
                      placeholder="Confirm Password" onChange={handleOnChange} value={newUser.confirmPassword} />
                    <label>Enter Confirm Password</label>
                  </div>

                  <p>{!passwordError.isLength && (<span className='text-danger'>
                    *Password should be minimum 8 characters!</span>)}</p>

                  <p>{!passwordError.confirmPassword && (<span className='text-danger'>
                    *Password and Confirm Password should match!</span>)}</p>

                  <div className="d-grid mb-2">
                    <button className="btn btn-md mt-2 btn-primary btn-login text-uppercase" type="submit"
                      disabled={Object.values(passwordError).includes(false)}>Register</button>
                  </div>

                  <p className="d-block text-center mt-4 medium">Already have an account ?<Link to="/"> Login Now</Link></p>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
