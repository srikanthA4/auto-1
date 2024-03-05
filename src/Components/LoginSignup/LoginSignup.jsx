import React, { useState } from 'react'
import './LoginSignup.css'

export const LoginSignup = () => {

    const [action,setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    
  return (
    <div className='container'>
    <div className='header'>
    <div className='text'> {action}</div>
    <div className='underline'></div>
    </div>
    <div className='inputs'>
        {action==="Login"?<div></div>:<div className="input">
        <input type= "text" placeholder='Name'/> 
        </div>}
        {action==="Login"?<div></div>:<div className="input">
        <input type= "text" placeholder='LastName'/>
        </div>
        }
        
        <div className="input">
        <input type= "email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder='Email Id'/>
        </div>
        <div className="input">
        <input type= "Password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder='Password'/>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">LostPassword? <span> Click Here! </span></div>}
        
        <div className="sumbit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        {/* Google authentication button */}
        <div className="google-auth-button">
          {action === "Login" ? "Login with Google" : "Sign up with Google"}
        </div>
    </div>
    </div>
  )
}
        


// import React, { useState } from 'react';
// import './LoginSignup.css';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// // Initialize Firebase with your project's configuration
// const firebaseConfig = {
//   // Add your Firebase config here
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const LoginSignup = () => {
//   const [action, setAction] = useState("Login");

//   // Function to handle Google authentication
//   const handleGoogleSignIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//       .then((result) => {
//         // Handle successful Google sign-in here
//         console.log('Google sign-in success', result.user);
//       })
//       .catch((error) => {
//         // Handle errors here
//         console.error('Google sign-in error', error);
//       });
//   };

//   return (
//     <div className='container'>
//       <div className='header'>
//         <div className='text'>{action}</div>
//         <div className='underline'></div>
//       </div>
//       <div className='inputs'>
//         {action === "Login" ? null : (
//           <>
//             <div className="input">
//               <input type="text" placeholder='Name' />
//             </div>
//             <div className="input">
//               <input type="text" placeholder='LastName' />
//             </div>
//           </>
//         )}

//         <div className="input">
//           <input type="email" placeholder='Email Id' />
//         </div>
//         <div className="input">
//           <input type="password" placeholder='Password' />
//         </div>
//         {action === "Sign Up" ? null : (
//           <div className="forgot-password">Password? <span> Click Here! </span></div>
//         )}

//         <div className="sumbit-container">
//           <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign up</div>
//           <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
//         </div>

//         {/* Button for Google authentication */}
//         <button className="google-auth-button" onClick={handleGoogleSignIn}>Sign in with Google</button>
//       </div>
//     </div>
//   );
// };
