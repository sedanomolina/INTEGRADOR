import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './LogOut.module.css'
import validate from '../../utils/validate';

export default function LogOut() {

    const register = {
        email: '',
        password: ''
    };

    const [userData, setUserData] = useState(register);
    const [errors, setErrors] = useState({});


    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

    async function login(userData) {
        const { password, email } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';

        try {
            const { data } = await axios(URL + `?email=${email}&password=${password}`);
            const { access } = data;
            
            setAccess(access);
            access
                ? navigate('/home')
                : window.alert('ups: no es la pass ;)')

        } catch (error) {
            window.alert('ups: ' + error.message)//aquí no llega nada!
        };
    };

    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    const handleSubmit = event => {
        event.preventDefault();
        login(userData);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        const updatedInputs = { ...userData, [name]: value };
        const updatedErrors = validate(updatedInputs);
        setUserData(updatedInputs);
        setErrors(updatedErrors);
    }

    const clearText = (event) => {

        const { name } = event.target;
        if (errors[name]) {
            setUserData(register);
            setErrors({});

        }

    }

    return (
        <div className={styles.container_form} >
            <div className={styles["login-box"]}>
                <h2>Login</h2>
                <form>
                    <div className={styles["user-box"]}>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            autoComplete='current-email'
                            onBlur={clearText}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        {errors.email && (<p className={styles.errorsText} >{errors.email}</p>)}
                    </div>
                    <div className={styles["user-box"]}>
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            autoComplete='current-password'
                            onBlur={clearText}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        {errors.password && (<p className={styles.errorsText} >{errors.password}</p>)}

                    </div>
                    <a onClick={handleSubmit} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    )
}