import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>내용</h1>
          <p className={styles.desc}>
            내용          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17673214/pexels-photo-17673214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>내용</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17673214/pexels-photo-17673214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         내용        </p>
      </div>
    </div>
  )
}

export default BlogPost