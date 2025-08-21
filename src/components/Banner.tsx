import styles from './bannner.module.css';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={'/img/cover.png'}
        alt="cover"
        fill={true}
        priority={true}
        objectFit='cover'/>
        <div className={styles.bannerText}>
            <h1 className={styles.bannerTitle}>where every event finds its venue</h1>
        </div>
    </div>
  );
}