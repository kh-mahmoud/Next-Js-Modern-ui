import Link from "next/link";
import { NAV_LINKS } from "../constants";
import Image from "next/image";


type SidebarProps = {
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({setActiveMenu}:SidebarProps) => {
  return (
    <nav className=" fixed bg-green-50 bg-pattern bg-cover bg-center bg-no-repeat top-0 left-0 h-screen w-screen z-50">
        <Image onClick={()=>setActiveMenu((prev)=>!prev)} src="/close.svg" alt="close" className="absolute right-10 top-10 cursor-pointer" width={24} height={24} />
        <ul className="h-full gap-5 flex flex-col items-center justify-center">
           {NAV_LINKS.map((link) => (
              <Link onClick={()=>setActiveMenu((prev)=>!prev)} href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
              </Link>
            ))}
        </ul>
    </nav>
  );
}

export default Sidebar;
