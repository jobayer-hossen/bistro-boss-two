import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="w-full m-4">
            <h2 className="text-3xl">Hi, {user.displayName}</h2>
        </div>
    );
};

export default AdminHome;