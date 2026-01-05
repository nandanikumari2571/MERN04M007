import React from 'react'
import { useParams } from 'react-router';

function Profile() {
    let {userid} = useParams();
  return (
    <div>
      Profile
      <br />
      Id: {userid}
    </div>
  )
}

export default Profile
