import { useContext } from "react"
import { AuthContext } from "../AuthContext"

export default function ProfilePage(){
    const {user} = useContext(AuthContext);
    return(
        <>
        <h1>Profile</h1>
        <p>Name: {user.name} </p>
        <p>more user info</p>
        </>
    )
}