import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./PasswordReset.css"
import { useDispatch, useSelector } from 'react-redux'
import {sendPasswordResetOtp} from "./passwordAction"
import { Alert } from "react-bootstrap"
import {useHistory } from 'react-router-dom'

function PasswordReset() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState("")
  const {status, message} = useSelector(state => state.password)

  const handleOnChange = e => {
		const { value } = e.target;
		setEmail(value);
	};


  const handleSubmit = e => {
    e.preventDefault()
    dispatch(sendPasswordResetOtp(email))
  }

  return (
    <>
      <div className="reset-container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex">
              </div>
              <div className="card-body p-4 p-sm-5">
                <h4 className="card-title text-center mb-5 fw-bold fs-5">Forgot Password</h4>

                {message && <Alert variant={status === "success" ? "success" : "danger"}>{message}</Alert> }
                
                <form onSubmit={handleSubmit}> 
 
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" placeholder="name@example.com" 
                    onChange={handleOnChange} value={email} required/>
                    <label >Email address</label>
                  </div>

                 
                  <Link to="/" className="d-block mt-2 mb-2 small" href="#">Back to Login Page</Link>

                  <div className="d-grid mb-2">
                    <button className="btn btn-md mt-2 btn-primary btn-login text-uppercase" type="submit">Submit</button>
                  </div>

                 

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PasswordReset
