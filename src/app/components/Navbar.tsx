import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import React from 'react'
import Link from 'next/link';


const Navbar = () => {
    return (
        <>
          
            <div className='w-full h-[124px]  flex justify-between items-center p-4'>
                <div className='w-[700px]  flex justify-between items-center p-4 '>
                    <div className='w-[148px] h-[44] p-2 font-black text-[24px] text-primary500 '>MORENT</div>
                    <button className="flex justify-start items-center border w-[492px] h-[44px] p-2  rounded-[45px] "><FaSearch /> <input type="text" placeholder=' Search something here' className="w-[420px] h-[35px] m-4" /><HiAdjustmentsHorizontal /></button>
                </div>
                <div className='w-[236px] h-[44px] p-2 flex justify-between text-[24px]'>
                    <FaHeart />
                    <FaBell />
                    <IoIosSettings />
                    <CgProfile />
                </div>
            </div>




        </>
    )
}

export default Navbar





