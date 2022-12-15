import React from "react"
import{navbar,
        logo,
        nav,
        navList,
        navItems} from'./layout.module.css'
import { StaticImage } from "gatsby-plugin-image"
export default function Layout({ children }) {
  return (
    <div>
        <header>
            <div className={navbar}>
               <div>
               <StaticImage 
                        alt='logo'
                        src='../../images/logo.png'
                        className= {logo}
                    />
               </div>
               <div className={nav}>
                <ul className= {navList}>
                    <li className={navItems}>Home</li>
                    <li className={navItems}>Shop</li>
                    <li className={navItems}>About</li>
                    <li className={navItems}>Best Deals</li>

                </ul>
               </div>
               <div>
               <StaticImage 
                        alt='logo'
                        src='../../images/Rectangle 7.png'
                    />
               </div>
            </div>
        </header>
      {children}
    </div>
  )
}