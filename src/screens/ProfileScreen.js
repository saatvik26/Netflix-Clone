// import { signOut } from 'firebase/auth';
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from '../features/counter/userSlice';
import Nav from '../Nav'
import "./ProfileScreen.css"
import { auth } from '../Fire';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img src='https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg' />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans </h3>
                            
                            <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
