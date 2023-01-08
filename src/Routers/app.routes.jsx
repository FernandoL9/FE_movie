import {Routes, Route } from 'react-router-dom';

import {New} from '../pages/New'
import {Home} from '../pages/Home'
import {Details} from '../pages/Details'
import {Profile} from '../pages/Profile'


export function AppRouter(){
  return (
    <Routes>
      <Route path='/new' element = {<New/>} />
      <Route path='/' element = {<Home/>}/>
      <Route path='/details/:id' element = {<Details/>}/>
      <Route path='/profile' element = {<Profile/>} />
    </Routes>
  ) 
}