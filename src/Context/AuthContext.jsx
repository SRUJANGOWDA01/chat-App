import React, { createContext, useState} from 'react'

export const AuthContext = createContext()

function AuthProvider(props) {
  // current user info after login authentication
const [currentUser,setCurrentUser] = useState(false)
  return (
    <AuthContext.Provider value={{ currentUser }} >
            {
                props.children
            }
    </AuthContext.Provider>
  )
}

export default AuthProvider