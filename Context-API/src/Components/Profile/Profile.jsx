import React from 'react'
import { useContext } from 'react'
import UserContext from '../../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login</div>

    console.log(user);

    return <div>Welcome {user.username}</div>

  return (
    <div>Profile</div>
  )
}

export default Profile