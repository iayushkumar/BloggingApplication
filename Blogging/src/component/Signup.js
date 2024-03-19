
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate(); // Use useNavigate for navigation

  const [credentials, setCredentials] = useState({
    name:'',
    email: '',
    password: '',
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('  https://blog-backend-rosy-six.vercel.app/api/auth/createuser', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.sucess===true) {
      
      // localStorage.setItem('token', json.authtoken);
      navigate('/Login'); // Use navigate for navigation
    } else {
      alert('Invalid credentials');
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const styles = {


    container1: {
     margin: 0,
     padding: 0,
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     height: '100vh',
     flexDirection: 'column',
     backgroundImage: `url('https://assets-global.website-files.com/5a9ee6416e90d20001b20038/64c21faa4f2a2f5ac63df849_-23.png')`,
     // backgroundRepeat: 'no-repeat', // Uncomment this line if needed
   },
   
   
   
    form : {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'rgb(242, 146, 242)',
     width: '300px',
     border: '1px solid #f012f0',
     borderRadius: '8px',
     padding: '20px',
     gap:'20px'
   },
   
   
   
   
 
   label: {
     marginBottom: '0.5rem',
   },
   input: {
     padding: '0.5rem',
     marginBottom: '2rem',
     width: '80%',
     boxSizing: 'border-box',
     borderRadius: '15px',
     border: '1px solid #9d14b8',
     backgroundColor: 'rgb(238, 117, 238)',
   },
   inputPlaceholder: {
     color: 'white',
   },
   button: {
     padding: '0.5rem 1rem',
     marginBottom: '30px',
     backgroundColor: '#29d6ba;',
     color: 'black',
     border: 'none',
     cursor: 'pointer',
     width: '80%',
     borderRadius: '15px',
     border: '1px solid #ccc',
   },
   disabledButton: {
     backgroundColor: '#007bff',
     cursor: 'not-allowed',
   },
   h1: {
     color: 'rgb(213, 44, 199)',
   },
   // Assuming your input has a specific ID or class, in this case, "dob"
   '#dob': {
     color: 'white',
   },
 };
 









  return (
    <div className='a' style={styles.container1}>
      <h2>Enter details to signup:</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={styles.label} >Name </label>
          <input type="text" className="form-control" id="name" value={credentials.name} onChange={handleChange} name="name" aria-describedby="nameHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={styles.label} >Email address </label>
          <input type="email" className="form-control" id="exampleInputEmail1" value={credentials.email} onChange={handleChange} name="email" aria-describedby="emailHelp" />
        </div>
       
        {/* <div className="mb-3">
          <label htmlFor="otp1" className="form-label" style={styles.label} >otp </label>
          <input type="email" className="form-control" id="otp1"  name="otp" aria-describedby="otpHelp" />
        </div>
        */}

        <div className="mb-3" >
        <label htmlFor="otp1" className="form-label" style={styles.label} > Enter otp </label>
        <div style={{ display: 'flex', gap: '5px',width:'200px' }}>

        <input type="text" className="form-control" id="otp1" name="otp1"  maxLength="1" />
          <input type="text" className="form-control" id="otp2" name="otp2" maxLength="1" />
          <input type="text" className="form-control" id="otp3" name="otp3" maxLength="1" />
          <input type="text" className="form-control" id="otp4" name="otp4" maxLength="1" />
        </div>
          
        </div>








        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={styles.label} > Password </label>
          <input type="password" className="form-control" onChange={handleChange} value={credentials.password} name="password" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary" style={styles.button} > SignUp </button>
      </form>


    </div>
  )
}
