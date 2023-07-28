import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div classname={styles.imageContainer}>
          <Image 
            src="https://images.pexels.com/photos/16776159/pexels-photo-16776159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>description</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div classname={styles.imageContainer}>
          <Image 
            src="https://images.pexels.com/photos/16776159/pexels-photo-16776159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>description</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div classname={styles.imageContainer}>
          <Image 
            src="https://images.pexels.com/photos/16776159/pexels-photo-16776159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>description</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog

