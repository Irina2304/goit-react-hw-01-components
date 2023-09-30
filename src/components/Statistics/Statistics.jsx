import styles from './Statistics.module.css'

export const Statistics = (props) => {
  return(
    <section className={styles.statistics}>
      <h2 className={styles.title}> {props.title}</h2>
      <ul className={styles.statList}>
        {props.stats.map(data => {
          return (
            <li className={styles.item} key={data.id}>
              <span className={styles.label}>{data.label}</span>
              <span className={styles.percentage}>{data.percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
};
