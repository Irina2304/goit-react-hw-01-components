import React from "react";
import styles from './Profile.module.css'

export const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src= {props.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{props.username}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}