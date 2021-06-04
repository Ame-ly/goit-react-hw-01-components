import React from 'react';
// import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={styles.item}>
    <span
      className={isOnline ? styles.friendIsOnline : styles.friendIsOffline}
    />
    <span />
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;
