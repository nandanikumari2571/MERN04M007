import React from 'react'
import { useLocation, useParams } from 'react-router';

function UserDetails() {
    const { UserId } = useParams();

    // findout the location
    const location = useLocation();

    // refering the search using the location
    const query = new URLSearchParams(location.search);

    // from the URLSearchParams object get the query value
    const name = query.get('name');
    const age = query.get('age');

  return (
    <div>
         User Details
         <br />
         <p>User Id: { UserId}</p>
         <br />
         <p>Name: { name}</p>
         <br />
         <p>Age: { age}</p>
    </div>
  )
}

export default UserDetails
