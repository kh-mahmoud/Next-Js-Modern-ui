'use client'
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
import Sidebar from "./Sidebar";
import { useState } from "react";


const Navbar = () => {
   const [activeMenu, setActiveMenu] = useState<boolean>(false);

   return (
      <nav className="flexBetween max-container padding-container sticky top-0 backdrop-blur-[30px] w-full z-30 py-5">
         {activeMenu && <Sidebar setActiveMenu={setActiveMenu}/>}
         <Link href={"/"}>
            <Image src={"/hilink-logo.svg"} alt="logo" height={21} width={74} />
         </Link>
         <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
               <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
               </Link>
            ))}
         </ul>
         <div className="lg:flexCenter hidden">
            <Link href={"#getApp"}>
              <Button type='button' text='Get App' variant='btn_dark_green' />
            </Link>
         </div>
         <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            onClick={()=>setActiveMenu(true)}
            className="inline-block cursor-pointer lg:hidden"
         />
      </nav>
   );
}

export default Navbar;
