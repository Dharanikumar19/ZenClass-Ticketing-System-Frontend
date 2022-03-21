import React, { useState } from "react";
import { useSelector } from "react-redux";
import PasswordReset from '../../components/PasswordReset/PasswordReset'
import UpdatePasswordForm from '../../components/PasswordReset/UpdatePasswordForm'


function PasswordResetPage() {
    const {showUpdatePassForm} = useSelector(state => state.password)
  return (
    <>
    {
        showUpdatePassForm ?  <UpdatePasswordForm/> :  <PasswordReset/>
    }
      
    </>
  )
}

export default PasswordResetPage
