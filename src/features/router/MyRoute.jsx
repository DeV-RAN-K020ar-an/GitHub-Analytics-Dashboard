import {Routes, Route} from 'react-router'
import Home from '../home/Home'
import Dashboard from '../compare/Dashboard'
import Favorite from '../favorites/Favorite'
import ProfilePage from '../details/ProfilePage'
import Settings from '../settings/Settings'
import Layout from '../layout/Layout'
import { useState } from "react";
import Login from '../login/Login'

const MyRoute = () => {
  const initalFavorite = []
  const [favorite, setFavorite] = useState(initalFavorite)
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/search' element={<Layout><Home favorite={favorite} setFavorite={setFavorite} /></Layout>} />
        <Route path='/compare' element={<Layout><Dashboard /></Layout>} />
        <Route path='/favorite' element={<Layout><Favorite setFavorite={setFavorite} favorite={favorite} /></Layout>} />
        <Route path='/details/:user' element={<Layout><ProfilePage favorite={favorite} setFavorite={setFavorite} /></Layout>}/>
        <Route path='/settings' element={<Layout><Settings /></Layout>}/>
    </Routes>
  )
}

export default MyRoute