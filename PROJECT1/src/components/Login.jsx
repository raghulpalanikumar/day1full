
import {useState} from 'react'
const Login = () => {
 const[formData,setFormData]=useState({
    email:'',
    password:''
 })
 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    setFormData({
        email:"",
        password:""
    })
 }
 const handleChange=(e)=>
 {
    setFormData({...formData,[e.target.name]:e.target.value})
 }  
  return (
    <div>
    <form action="" onSubmit={handleSubmit}>
    <label>Email :</label>
    <input type="email" name="email"  value={formData.email} onChange={handleChange} placeholder="Enter email" />
    <label>Password :</label>
    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
    <input type="submit" value="Login" />
    </form>
    </div>
  )
}

export default Login