import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17636977/pexels-photo-17636977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p  className={styles.desc}>Description</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p  className={styles.desc}>
          Description Description Description Description Description Description Description Description Description Description Description Description
          <br/>
          <br/> - Dynamic Websites
          <br/>
          <br/> - Fast and Handy
          <br/>
          <br/> - Mobile Apps
          </p>

          <Button url="/contact" text="Contact"/>
        </div>
      </div>
     </div>
  )
}

export default About

