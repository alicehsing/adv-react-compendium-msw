import styles from '../App.css';

export default function CharacterCard({ name, image, quote }) {
  return (
    <>
      <div className={styles.item}>
        <h3>
          {name}: "{quote}"
        </h3>
        <img alt="character" src={image} />
      </div>
    </>
  );
}
