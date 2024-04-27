import React from 'react'

import { Link } from 'react-router-dom'

function NavBar() {
  
  return (
    <div className='flex mx-5 pb-2 pt-2 justify-between '>
       <div>
        <Link>LOGO</Link>
       </div>
       <div className=''>
        <ul className='flex'>
          <li className='mx-5'>
            <Link to='work-flow-builder'>Editor</Link>
          </li>
          <li>
            <Link to='work-flow-execution'>Execute</Link>
          </li>
        </ul>
       </div>
    </div>
  )
}

export default NavBar