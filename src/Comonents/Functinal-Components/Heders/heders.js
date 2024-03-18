import { Link } from "react-router-dom"


const Heders = ()=>{
    const Linkstyle={textDecoration:"none",margin:20,color:"yellow "}
    return(
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">     
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link style={Linkstyle} to={"/"}>Home</Link>
      </li>
      <li className="nav-item">
      <Link style={Linkstyle} to={"/profile"}>
      Profile</Link>
      </li>
      <li className="nav-item">
       <Link style={Linkstyle} to={"/About"}>
       About</Link>
      </li>
      <li className="nav-item">
        <Link style={Linkstyle} to={"/setting"} >
        settings</Link>
      </li>
     
    </ul>
  </div>
</nav>
    )
}
export default Heders