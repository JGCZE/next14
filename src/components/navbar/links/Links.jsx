"use client"
import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
{ 
  title: "Home", 
  path: "/" 
},{
  title: "About", 
  path: "/about" 
},{
  title: "Contact", 
  path: "/contact" 
}, {
  title: "Blog", 
  path: "/blog" 
}];

const Links = () => {
  const [open, setOpen] = useState(true)
  
  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <NavLink item={link} key={link.title}/>
          )
        })}{
          session? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin" , path: "/admin"}} />}
              <button className={styles.logout}>Log out</button>
            </>
          ) : (
            <NavLink item={{title: "Login", path: "/login" }} />
          )
        }
      </div>
      <Image 
        className={styles.menuBtn}
        src="/menu.png" alt="" width={30} height={30} 
        onClick={() => setOpen((prev) => !prev)} />
      {open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => {
              return (
              <NavLink item={link} key={link.title} />
              )
            })}
          </div>
      )
      }
    </div>
  )
};

export default Links;
