import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglePostPage = ({params}) => {
  console.log(params);
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/19899552/pexels-photo-19899552/free-photo-of-more-rozbresk-krajina-zapad-slunce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} width={50} height={50}  src="https://images.pexels.com/photos/4823732/pexels-photo-4823732.jpeg" alt="" />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Terry Jefferson</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo officiis, saepe dolorem illum tenetur dolor veniam, cumque corporis perferendis harum, beatae ab earum in sapiente ratione ad facilis quis!
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage