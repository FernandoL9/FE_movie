import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [data, setData] = useState({})

  async function signIn({email, password}) {
    try{
    const response = await api.post("/sessions", {email, password})
    const {user, token} = response.data
    console.log(user, token)

    localStorage.setItem("@rocketmovienotes:user", JSON.stringify(user))
    localStorage.setItem("@rocketmovienotes:token", token)

    api.defaults.headers.authorization = `Bearer ${token}`
    setData({user, token})
    }
    catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      }else {
        alert("denied acesso")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovienotes:token")
    localStorage.removeItem("@rocketmovienotes:user")

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovienotes:token")
    const user = localStorage.getItem("@rocketmovienotes:user")

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.stringify(user)
      })
    }

  }, [])

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut, 
      user: data.user
      }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth}