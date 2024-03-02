"use client"
import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogOut } from "@/app/lib/action";

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

const Links = ({session}) => {
  const [open, setOpen] = useState(true)
  
  // TEMPORARY
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <NavLink item={link} key={link.title}/>
          )
        })}
        {session?.user ? (
            <>
              {session.user?.isAdmin && <NavLink item={{ title: "Admin" , path: "/admin"}} />}
              <form action={handleLogOut}>
                <button className={styles.logout}>Log out</button>
              </form>
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
