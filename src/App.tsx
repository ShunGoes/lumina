import { Suspense, lazy } from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import Loading from './components/loading'
import Explore_Layout from './layout/explore'
import Explore_Users from './pagges/explore-users/explore-users'
import Test from './pagges/tinder/test'
import Terms_And_Policy from './pagges/policy/policy'

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
        <Route path='/test' element={<Test />} />
        <Route path='/tinder' element={<Tinder />} />
        <Route path='/policy' element={<Terms_And_Policy />} />
        <Route path='/explore' element={<Explore_Layout />} >
          <Route index element={<Explore_Users />} />
        </Route>
          
      </Routes>
      </Suspense>
     </div>
  )
}

export default App
