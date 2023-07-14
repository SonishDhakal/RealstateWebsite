import React from 'react'
import { useAuth } from '../Utils/Context/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoute = () => {
    const navigate = useNavigate()
    const {currentUser} = useAuth()
    return (currentUser ? <Outlet /> : navigate('/login'))

    

  
}

export default PrivateRoute