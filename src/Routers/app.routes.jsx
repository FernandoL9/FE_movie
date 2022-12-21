import {Routes, Route } from 'react-router-dom';

import {New} from '../pages/New'
import {Home} from '../pages/Home'
import {Details} from '../pages/Details'
import {Profile} from '../pages/Profile'


export function AppRouter(){
  return (
    <Routes>
      <Route path='/New' element = {<New/>} />
      <Route path='/' element = {<Home/>}/>
      <Route path='/Details' element = {<Details/>}/>
      <Route path='/profile' element = {<Profile/>} />
    </Routes>
  ) 
}