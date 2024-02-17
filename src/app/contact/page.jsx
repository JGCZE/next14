import Image from "next/image"
import styles from "./contact.module.css"
import dynamic from "next/dynamic"
//import HydratationTest from "@/components/hydratationTest"

//const HydratationTestNoSSR = dynamic(() => import("@/components/HydratationTest"), { ssr: false})

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.image} />
      </div>
      <div className={styles.formContainer}>
      {/* <HydratationTestNoSSR /> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea name=""  placeholder="Message" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage