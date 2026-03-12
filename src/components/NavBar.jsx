import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext";

export default function NavBar() {
    const {user, logout} = useContext(AuthContext);
  return (
    <>
    <header 
    style={{
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderBottom: "1px solid white",
        display:"flex",
        justifyContent: "space-between",
    }}>

      <nav style={{ display: "flex", gap: "1rem"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <div>
        {!user.isAuth ? <Link to="/login">Log in</Link> : <button onClick={logout}>Log out</button>}
        
      </div>
    </header>
    </>
  );
}
