import { useEffect, useState } from "react"
import { data } from "react-router-dom"

function Github() {
    const [data,setdata] = useState([])
   useEffect(()=>{
        fetch('https://api.github.com/users/ArmCoderH')
        .then(response => response.json())
        .then(data=>{
            setdata(data)
        })
   },[])
  return (
    <div className=' text-center m-4 bg-orange-700 text-white p-4 text-2xl font-mono border-spacing-1'>
    Name: {data.login} Followers: {data.followers}
      <img src={data.avatar_url} alt="github pic" width={300}/>
       </div>
  )
}

export default Github 