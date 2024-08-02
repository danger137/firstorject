'use client';
import { addUser, removeUser, setUser, updateUser } from "@/store/auth";
import meraStore from "@/store/store";
import Link from "next/link";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./header.css"
// export default ()=>{

//   return <Provider store={meraStore} >
//     <Header></Header>



//   </Provider>



// }



 export default function Header(){

  let dispatch = useDispatch();

  let someName = useSelector((store)=>{
    return store.currentUser;
  })






  


return <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="/">
    Navbar
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link  className="nav-link" href="/Dashboard">
          Dashboard <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/Signup">
          Signup
        </Link>
      </li>
      <li className="nav-item dropdown">
    
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </li>
   {!someName.email ?   <li className="nav-item">
        <Link className="nav-link disabled" href="/Login">
          Login
        </Link>
      </li>:null}
  { someName.email ?   <li className="nav-item">
        <Link onClick={()=>{
          dispatch(setUser({}));
        }}  className="nav-link disabled" href="/Login">
          Logout
        </Link>
      </li>:null}
      <li className="nav-item">
        <Link className="nav-link disabled" href="/Ads">
          Create Ads
        </Link>
        {/* <Link className="nav-link disabled" href="/Train">
          Train
        </Link> */}
      </li>

      <li className="nav-item">
        {/* <Link className="nav-link disabled" href="/User">
          Users
        </Link> */}
        {/* <Link className="nav-link disabled" href="/jquery">
          Jquery
        </Link> */}
             <Link className="nav-link disabled" href="/User">
          Users
        </Link> 
        {/* <Link className="nav-link disabled" href="/Train">
          Train
        </Link> */}
      </li>
      <li className="nav-item">
        {/* <Link className="nav-link disabled" href="/User">
          Users
        </Link> */}
        {/* <Link className="nav-link disabled" href="/jquery">
          Jquery
        </Link> */}
             <Link className="nav-link disabled" href="/Fresh">
             Fresh
        </Link> 
        {/* <Link className="nav-link disabled" href="/Train">
          Train
        </Link> */}
      </li>
{ someName.email ?     <li className="nav-item">
        {/* <Link className="nav-link disabled" href="/User">
          Users
        </Link> */}
       <span id="wel" >Welcome</span> 
       <p className="mail" >{someName.email}</p>
      
        {/* <Link className="nav-link disabled" href="/Train">
          Train
        </Link> */}
      </li>:null}
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>

</div>


}