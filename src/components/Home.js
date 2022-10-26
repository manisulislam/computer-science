import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            this is home for {user?.displayName}
        </div>
    );
};

export default Home;