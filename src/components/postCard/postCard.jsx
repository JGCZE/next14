import Image from "next/image"
import Link from "next/link"
import styles from "./postCard.module.css"

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/7050090/pexels-photo-7050090.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam illo dolorum asperiores deserunt voluptas rem commodi harum cupiditate. Veniam perferendis quibusdam.</p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  )
}

export default postCard