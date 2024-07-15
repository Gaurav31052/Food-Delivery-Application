import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return <>
  <div>
    <div className='flex flex-row justify-between items-center p-4'>
        <div className='text-4xl font-bold text-purple-500'>TaStE HeAvEn Admin panel</div>
        <div><img className=' w-7 mt-1' src={assets.user_icon} alt=''/></div>
    </div>
    </div>
  </>
}

export default Navbar
