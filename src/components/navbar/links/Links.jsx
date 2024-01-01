import styles from "./links.module.css"
import NavLink from "./navLink/navLink";

const Links = () => {
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

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => {
        return (
          <NavLink item={link} key={link.title}/>
        )
      })}
    </div>
  )
};

export default Links;
