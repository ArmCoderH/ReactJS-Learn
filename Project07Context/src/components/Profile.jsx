import React,{useContext} from 'react'
import UserCotext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserCotext)

    if(!user) return <div>Pleasse Login in</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
