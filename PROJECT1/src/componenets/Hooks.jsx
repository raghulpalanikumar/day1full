import React from 'react'
import {Link} from 'react-router-dom'

const Hooks = () => {
  return (
    <div style = {{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px",flexWrap:"wrap",fontSize:"30px"}}>
        <Link to="/state">useState</Link>
         <Link to="/effect">useEffect</Link>
         <Link to="/effect2">useEffect2</Link>
    </div>
  )
}

export default Hooks