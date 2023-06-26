import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function useAccess(userData) {
    
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    
    const EMAIL = 'ejemplo@gmail.com';
    const PASSWORD = 'unaPassword';


    if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
    }

}