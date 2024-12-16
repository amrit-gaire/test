import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
<div className='flex justify-around shadow sticky z-50 top-0 bg-white items-center pb-3'>
    <div>
        yourlogo
    </div>
    <div className='justify-between'>
    <ul className='flex gap-6'>
        <li>
            <NavLink to="/"
             className={({isActive})=>
             `block pl-2 ${isActive?" text-red-800":"text-gray-700"}`}>
               Home
            </NavLink>
            </li>
        <li>
        <NavLink to="/about"
             className={({isActive})=>
             `block pl-2 ${isActive?" text-red-800":"text-gray-700"}`}>
               About
            </NavLink> 
        </li>
        <li>
        <NavLink to="/contact"
             className={({isActive})=>
             `block pl-2 ${isActive?" text-red-800":"text-gray-700"}`}>
               Contact
            </NavLink> 
        </li>
        <li>
        <NavLink to="/github"
             className={({isActive})=>
             `block pl-2 ${isActive?" text-red-800":"text-gray-700"}`}>
               Github
            </NavLink> 
        </li>
    </ul>
    </div>
    <div className='flex gap-10 items-center'>
        <div>Log in</div>
        <div className='rounded-lg bg-red-700 px-3 py-1 text-white'>Get started</div>
    </div>
</div>
  )
}

export default Header