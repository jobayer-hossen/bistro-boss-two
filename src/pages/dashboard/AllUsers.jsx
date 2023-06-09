import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure]= useAxiosSecure();
    const { data: users = [] , refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleAdmin = (user)=>{
        fetch(`https://bistro-boss-server-efilhj8gb-emonhasan007.vercel.app/users/admin/${user._id}`,{
            method:'PATCH',

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire(
                    'Good job!',
                    `${user.name} is an Admin Now !`,
                    'success'
                  )
            }
        })
    }
    const handleDelete =(user) =>{

    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            {users.length}

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index)=>
                            <tr key={user._id}>
                            <th>{index +1 }</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{
                                user.role == 'admin' ? 'admin' :
                                <button onClick={() => handleAdmin(user)} className="btn btn-ghost bg-red-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                            <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                        </tr>
                                )
                        }
                    
                    </tbody>
                </table>
            </div>






        </>
    );
};

export default AllUsers;