import React from 'react'
import { TiSocialFacebook} from "react-icons/ti";
import { FaDiscord,FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CiBasketball } from "react-icons/ci";




function Footer() {
  return (
  //  main div
   <div>
    {/* first div */}
      <div className='bg-white shadow py-3'>
       <div className='flex  gap-8 justify-around'>
       <div className=''> your logo</div> 
       <div className='grid grid-cols-3 gap-5 '>
       <div>
        <h2 className='mb-5'>Resources</h2>
        <ul>
          <li className='hover:underline cursor-pointer'>Home</li>
          <li className='hover:underline cursor-pointer'>About</li>
        </ul>
       </div>
       <div>
        <h2 className='mb-5'>Follow Us</h2>
        <ul>
           <li className='hover:underline cursor-pointer'>Github</li>
            <li className='hover:underline cursor-pointer'>Discord</li>
        </ul>
       </div>
       <div>
        <h2 className='mb-5'>Ligal</h2>
        <ul>
          <li className='hover:underline cursor-pointer'>Privacy policy</li>
          <li className='hover:underline cursor-pointer'>Terms & condition</li>
        </ul>
       </div>
       </div>
       </div>
      </div>
      <hr className='border-gray-200'/>
      {/* second div */}
      <div className='flex justify-around  bg-white shadow py-5'>
        <h3>@2023AmritGaire. All Right Reserved.</h3>
        <div className='flex gap-3'>
    
            
            <TiSocialFacebook className='size-6'/>
            
            
            <FaDiscord className='size-5'/>
            
            <FaTwitter  className='size-5'/>
            <FaGithub  className='size-5'/>
            <CiBasketball className='size-5' />
          
        </div>
      </div>

    </div>
  )
}

export default Footer