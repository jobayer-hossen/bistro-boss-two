import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const navigate = useNavigate()
    const {googleLogin} = useContext(AuthContext);
    const handleGoogle =()=>{
        googleLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)

            const saveUser = {name: loggedUser.displayName , email:loggedUser.email }
            fetch('http://localhost:7000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                  navigate('/')
                })
        })
        .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full  mb-5 text-center'>
                <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                   <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;