import Image from "next/image";

type ButtonProps={
   type: 'button' | 'submit' ;
   text: string;
   icon?: string;
   variant?: 'btn_dark_green' | string
}

const Button = ({type, text , icon , variant}:ButtonProps )=> {
  return (
    <button className={`${variant} border gap-3 flexCenter rounded-full cursor-pointer`} type={type}>
       {icon   && <Image src={icon} alt={icon} width={24} height={24}/>}
       <label>{text}</label>
    </button>
  );
}

export default Button;
