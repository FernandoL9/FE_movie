import {Routes, Route } from 'react-router-dom';

import {SignUp} from '../pages/SignUp'
import {SignIn} from '../pages/SignIn'

export function AuthRouter(){
  return (
    <Routes>
      <Route path='/' element = {<SignIn/>}/>
      <Route path='/SignUp' element = {<SignUp/>}/>
    </Routes>
  ) 
}