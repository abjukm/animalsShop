import React from 'react'
import Petshop from '../assets/footicon/petshop.svg'
import face from '../assets/footicon/face.svg'
import insta from '../assets/footicon/insta.svg'
import twiter from '../assets/footicon/twiter.svg'





export const Footer = () => {

  return (
    <>
       <div className="bg-black w-auto h-120">
            <h1 className='text-white flex justify-center pt-10 text-2xl'>Subscribe To Our Newsletter</h1>
          <div className="flex justify-center pt-10">
            <input type="text"    className="text-white placeholder-white border border-white  px-8 py-2 rounded " placeholder='Email'/>
            <button className='text-white bg-[#EBC154] px-12 py-2 rounded ml-3 hover:bg-gray-800 transition'>SUBSCRIBE</button>
          </div>
          <div className="flex justify-between mt-20">
          <img src={Petshop} alt="" className='ml-5'/>
              <ul className='text-white flex gap-10 text-xl mr-5'>
                <li className='hover:text-[#EBC154]'>Home</li>
                <li className='hover:text-[#EBC154]'>Tours</li>
                <li className='hover:text-[#EBC154]'>Hotels</li>
                <li className='hover:text-[#EBC154]'>Faqs</li>
                <li className='hover:text-[#EBC154]'>Blog</li>
                <li className='hover:text-[#EBC154]'>Contact</li>
              </ul>
          </div>
              <hr  className='bg-white w-auto h-1 '/>

              <div className="flex justify-center gap-10 mt-20">
                <img src={face} alt="" className='transition-transform transform hover:scale-105'/>
                <img src={insta} alt="" className='transition-transform transform hover:scale-105' />
                <img src={twiter} alt="" className='transition-transform transform hover:scale-105' />
              </div>
       </div>
       
    </>
  )
}
