import React, { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Headers from './Components/Headers'
import Forgot from './Pages/Forgot'

import AuthContextProvider from './Utils/Context/AuthContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'
import { useUserContext } from './Utils/Context/UserContext'
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Pages/Profile'
import Property from './Pages/Profile/Property'
import Offer from './Pages/Offer'
import Sell from './Pages/Sell'
import Rent from './Pages/Rent'
import SecondaryRoute from './Components/SecondaryRoute'

const App = () => {
  const {setShowHeader} =useUserContext()
 
  return (
  <main className='min-h-screen min-w-screen overflow-hidden  ' >
   <BrowserRouter>
   
   <AuthContextProvider>
    

  <Headers />

    <Routes>

  <Route path='/' element={<Home />} />
    <Route path='/profile' element={<PrivateRoute />}>
    <Route path='/profile/*' element={<Profile />} />
    </Route>
   

    <Route path='/login' element={<SecondaryRoute />}>
    <Route path='/login' element={<Login />} />
      </Route>
      <Route path='/signup' element={<SecondaryRoute />}>
      <Route path='/signup' element={<Signup />} />
      </Route>
      <Route path='/forgot' element={<SecondaryRoute />}>
      <Route path='/forgot' element={<Forgot />} />
      </Route>
    
    
    
    <Route path='/property/:id' element={<Property />} />
    <Route path='/offer' element={<Offer />} />
    <Route path='/rent' element={<Rent />} />
    <Route path='/sell' element={<Sell />} />

    </Routes>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
   </AuthContextProvider>
    </BrowserRouter>
    
  </main>
  )
}

export default App