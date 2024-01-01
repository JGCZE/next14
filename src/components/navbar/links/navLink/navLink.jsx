"use client"
import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {
  const { title, path } = item
  const pathName = usePathname()

  return (
    <Link href={path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
      {title}
    </Link>
  )
}

export default NavLink