import { createContext, useState, useContext, useEffect } from "react";
import { registeRequest, loginRequest } from '../api/auth';
import { data } from "react-router-dom";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registeRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)

        } catch (error) {
            if (Array.isArray(error.response, data)){
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
                
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [errors])


    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}