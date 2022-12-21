import {Routes, Route } from 'react-router-dom';

import {SignUp} from '../pages/SignUp'
import {Signin} from '../pages/Signin'

export function AuthRouter(){
  return (
    <Routes>
      <Route path='/' element = {<SignUp/>} />
      <Route path='/Signin' element = {<Signin/>}/>
    </Routes>
  ) 
}