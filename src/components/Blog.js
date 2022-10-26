import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <h3>Welcome To Learn Academy Blog</h3>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
   What is CORS?
  </div>
  <div className="collapse-content"> 
    <p>
    Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
    </p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  Why are you using firebase? What other options do you have to implement authentication?
  </div>
  <div className="collapse-content"> 
    <p>
        
    Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it!Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.Tired of writing boring code for your backend, or can't even write it at all? Try Google Firebase. So what's Google Firebase, and why should you build your app around it?
        
        </p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How does the private route work?
  </div>
  <div className="collapse-content"> 
    <p>
        
    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
    
    </p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is Node? How does Node work?
  </div>
  <div className="collapse-content"> 
    <p>
        
    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        
        </p>
  </div>
</div>
        </div>
    );
};

export default Blog;