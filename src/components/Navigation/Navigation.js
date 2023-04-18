import { Link } from "react-router-dom";
import './Navigation.css';
export default function Nav(props){
    return (
        <>
        
        <div className="nav-bar"> 
       <div className="heading"> <h1>The Reading Room  {props.title?`| ${props.title}`:''}</h1></div>
       <div className="links">
       <Link className="link" to='/' >Home</Link> |
        <Link className="link" to='/orders' >My Orders</Link> |
        <Link className="link" to='/cart'>Cart</Link>
       </div>
        

        </div>
        </>
    )
}