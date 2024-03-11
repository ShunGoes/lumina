import { Suspense, lazy } from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import Loading from './components/loading'
import Explore_Layout from './layout/explore'

function App() {
  const Home = lazy(() => import('./pagges/home/home'))
  const Login = lazy(() => import('./pagges/auth-login/login'))
  const Register = lazy(() => import("./pagges/auth-register/register"))
  const Tinder = lazy(() => import("./pagges/tinder/tinder"))
  return (
    <div>
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tinder' element={<Tinder />} />
        <Route>
          <Route path='/explore' element={<Explore_Layout />} />
          
        </Route>
      </Routes>
      </Suspense>
     </div>
  )
}

export default App
