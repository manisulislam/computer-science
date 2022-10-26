import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const LogIn = () => {


  const {signIn}= useContext(AuthContext)
  const {providerLogIn}= useContext(AuthContext)
  const {githubProviderLogIn}= useContext(AuthContext)
  console.log(githubProviderLogIn)
  const gogoelProvider = new GoogleAuthProvider()
  const providerGithub = new GithubAuthProvider()


  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.error(error))
    
  }
   const handleGoogleSignIn =()=>{
    providerLogIn(gogoelProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
      
    })
    .catch(erorr => console.error(erorr))


   }
   const handleGithubSignIn = ()=>{
    githubProviderLogIn(providerGithub)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(erorr=> console.erorr(erorr))



   }





    return (
        <div>
      
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    {/*   <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <p className="label-text-alt link link-hover">New to Learn Academy? <Link to='/register'><span className='text-orange-500'>Please Register</span></Link></p>
          
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="btn-group btn-group-vertical">
  <button onClick={handleGoogleSignIn} className="btn mb-3 bg-sky-500"> <FaGoogle></FaGoogle> Google</button>
  <button onClick={handleGithubSignIn} className="btn bg-sky-600">github</button>

</div>
         
       
        
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;