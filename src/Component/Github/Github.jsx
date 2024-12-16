import React, { useEffect, useState } from 'react'

function Github() {
    const[data,setdata]=useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/amritgaire/followers')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setdata(data)
        })
    },[])
  return (
    <div>Github followers:{data.followers}</div>
  )
}

export default Github