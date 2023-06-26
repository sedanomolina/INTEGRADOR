
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './LogOut.module.css'
import validate from '../../utils/validate';

export default function LogOut() {

    const register = {
        email: '',
        password: ''
    }

    const [userData, setUserData] = useState(register);
    const [errors, setErrors] = useState({});


    const navigate = useNavigate();
    const [access, setAccess] = useState(false);

    const EMAIL = 'luar.01@hotmail.com';
    const PASSWORD = 'unaPass777';

    function login(userData) {
        if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
        }
    };
    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    const handleSubmit = event => {
        event.preventDefault()
        login(userData)
    }

    const handleChange = event => {
        const { name, value } = event.target
        const updatedInputs = { ...userData, [name]: value };
        const updatedErrors = validate(updatedInputs);
        setUserData(updatedInputs);
        setErrors(updatedErrors);
    }

    const clearText = (event) => {

        const { name } = event.target;
        if (errors[name]) {
            setUserData(register)
            setErrors({})

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