import { useState } from "react";
import validation from "./Validation";
import style from './loginForm.module.css';

const Form = ({ login }) => {
    const [errors, setErrors] =useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleOnSubmit =(event) => {
        event.preventDefault();
        login(userData);
    }
    
    return(
        <form className={style['form-container']} onSubmit={handleOnSubmit}>
        <label htmlFor="email" style={{ color: 'black' }}>
          Email:
        </label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
        <hr />
        <label htmlFor="password" style={{ color: 'black' }}>
          Password:
        </label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
  
        <button>Submit</button>
      </form>
    )
}

export default Form;