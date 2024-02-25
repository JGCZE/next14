import Image from "next/image"
import styles from "./about.module.css"

export const metadata = {
  title: 'About Page',
  description: 'About description',
}

const AboutPage = () => {

  console.log("check where its works");

  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/11634900/pexels-photo-11634900.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" fill/>
      </div>
    </div>
  )
}

export default AboutPage