import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { updatePassword } from './passwordAction';

const initialState = {
  pin: "",
  password: "",
  confirmPassword: "",
}

const passwordVerification = {
  isLength: false,
  confirmPassword: false
}

function UpdatePasswordForm() {
  const dispatch = useDispatch()
  const [newPassword, setNewPassword] = useState(initialState)
  const [passwordError, setPasswordError] = useState(passwordVerification);
  const {status, message, email} = useSelector(state => state.password)




  const handleOnChange = e => {
    const { name, value } = e.target
    setNewPassword({ ...newPassword, [name]: value })

    if (name === "password") {
      const isLength = value.length >= 8
      setPasswordError({
        ...passwordError, isLength
      })
    }
    if (name === "confirmPassword") {
      setPasswordError({
        ...passwordError, confirmPassword: newPassword.password === value,
      })
    }
  }



  const handleSubmit = e => {
    e.preventDefault()
    const {pin, password} = newPassword;

    const newPasswordObj = {
      pin,
      newPassword : password,
        email
    }
    dispatch(updatePassword(newPasswordObj))
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
                <h4 className="card-title text-center mb-5 fw-bold fs-5">Update Password</h4>
                <form onSubmit={handleSubmit}>
                  <div>
                    {message && <Alert variant={status === "success" ? "success" : "danger"} className="text-center">{message}</Alert>}
                  </div>
        
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control" name='pin' placeholder="Pin"
                      onChange={handleOnChange} value={newPassword.pin} />
                    <label>Enter Secret Pin</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name='password' placeholder="Password"
                      onChange={handleOnChange} value={newPassword.password} />
                    <label>Enter Password</label>
                  </div>
                  
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" name='confirmPassword'
                      placeholder="Confirm Password" onChange={handleOnChange} value={newPassword.confirmPassword} />
                    <label>Enter Confirm Password</label>
                  </div>

                  <p>{!passwordError.isLength && (<span className='text-danger'>
                    *Password should be minimum 8 characters!</span>)}</p>

                  <p>{!passwordError.confirmPassword && (<span className='text-danger'>
                    *Password and Confirm Password should match!</span>)}</p>

                  <div className="d-grid mb-2">
                    <button className="btn btn-md mt-2 btn-primary btn-login text-uppercase" type="submit"
                      disabled={Object.values(passwordError).includes(false)}>Update Password</button>
                  </div>
                 <p className="d-block text-center mt-4 medium"><Link to="/"> Login Now</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatePasswordForm
