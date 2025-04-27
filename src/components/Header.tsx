import { FC, ReactNode } from "react";
interface HeaderProps {
   // image: {
   //    src: string;
   //    alt: string;
   // }
   children: ReactNode;
}

const Header:FC<HeaderProps> = ({children}) => {
 return(
    <header>
      {/* <img {...image} /> */}
      {children}
    </header>
 )
}

export default Header;