import React from 'react'
import { useParams, useSearchParams } from 'react-router'

function Profile() {

    // let { id } = useParams()
    let [searchParams]= useSearchParams()


    let search = searchParams.get("search")
    let cata = searchParams.get("cata")

    console.log(search, cata);
    return(
        <div>
            Profile 
            <br />
            { /* id {id} */}
        </div>
    )



  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
