import styles from "./postUser.module.css"
import Image from "next/image"
import { getUser } from "../../app/lib/data"

// const getData = async(userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"})

//   if(!res.ok) {
//     throw Error("fuck")
//   }
//   return res.json()
// }


const PostUser = async ({ userId }) => {
  console.log(userId);
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      <Image className={styles.avatar} width={50} height={50}  src={user.img ? user.img : "/noavatar.png"} alt="" />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
  </div>
  )
}

export default PostUser