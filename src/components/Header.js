import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
  const {user}= useContext(AuthContext)
  
    return (
        <div>
            <div className="navbar bg-base-100  bg-red-300">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-white">LEARN ACADEMY</a>
  </div>
  <div className="flex-none gap-2">
  <ul className="menu font-bold menu-horizontal p-0">
     
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/courses'>Courses</Link></li>

      
      
      
      <li> <Link to='/blog'>Blog</Link></li>
      <li> <Link to= '/faq'>FAQ</Link></li>
      <li> <Link to='/login'>LogIn</Link></li>
      <li><Link to='/register'>Register</Link></li>
     
    </ul>
    <p> {user?.displayName}</p>
    
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
           
        </div>
    );
};

export default Header;