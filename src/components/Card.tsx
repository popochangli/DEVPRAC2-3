import styles from './card.module.css';
import Image from 'next/image';

export default function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.cardImage}>
            <Image src={'/img/venue1.png'}
            alt='venue image'
            fill={true}
            objectFit='cover' />
        </div>
        <div className={styles.cardText}>venue 1</div>
    </div>
  );
}