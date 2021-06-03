import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id} className={styles.item}>
        <span
          className={
            friend.isOnline ? styles.friendIsOnline : styles.friendIsOffline
          }
        ></span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}

    {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
  </ul>
);

FriendsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendsList;
