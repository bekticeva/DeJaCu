import { useContext } from "react"
import { AuthContext } from "../AuthContext"

export default function HomePage(){
    const {user} = useContext(AuthContext);
    return(
        <>
        <h1>Home Page</h1>
        
        {user.isAuth ? (
            <p>Welcome back, {user.name}! </p>
        ) : (
            <p>You are not logged in. Go to the login page</p>
        )}

        </>
    )
}