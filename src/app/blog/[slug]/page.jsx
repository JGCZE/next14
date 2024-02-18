import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css"
import Image from "next/image"
import { Suspense } from "react";

// Fetch data witch API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const SinglePostPage = async ({params}) => {
  const { slug } = params
  //const post = await getData(slug)
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/19899552/pexels-photo-19899552/free-photo-of-more-rozbresk-krajina-zapad-slunce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} width={50} height={50}  src="https://images.pexels.com/photos/4823732/pexels-photo-4823732.jpeg" alt="" />
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.01.2024</span>
            </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage