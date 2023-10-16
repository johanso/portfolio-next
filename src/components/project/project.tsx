"use client"
import {useState} from 'react'
import Image from 'next/image'
import styles from './project.module.scss'
import { IPortfolio } from '@/app/types/works';
import { IoResize } from 'react-icons/io5';

const Project = ({name,
  image,
  company,
  }: IPortfolio) => {
  const [hasError, setHasError] = useState(false);
  const fallbackSrc = '/../img/default-fallback.png'

  return (
    <div className={styles.image}>
      <span className={styles.icon}>
        <IoResize />
      </span>
      <Image
        src={hasError ? fallbackSrc : `/img/${image}`}
        width={200}
        height={250}
        alt={name}
        onError={() => !hasError && setHasError(true)}
      />
      <span className={styles.title}>{company}</span>
    </div>
  )
}

export default Project