import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';

const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17300131/pexels-photo-17300131/free-photo-of-laguna-halcon-ushuaia-tierra-del-fuego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17300131/pexels-photo-17300131/free-photo-of-laguna-halcon-ushuaia-tierra-del-fuego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17300131/pexels-photo-17300131/free-photo-of-laguna-halcon-ushuaia-tierra-del-fuego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17300131/pexels-photo-17300131/free-photo-of-laguna-halcon-ushuaia-tierra-del-fuego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17300131/pexels-photo-17300131/free-photo-of-laguna-halcon-ushuaia-tierra-del-fuego.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill={true} className={styles.img}/>
        </div>
      </div>
    </div>
  )
}

export default Category