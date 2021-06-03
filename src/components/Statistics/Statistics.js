import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className = {styles.title}> {title} </h2>}

    <ul className={styles.statlist}>
      {stats.map(statData => (
        <li key={statData.id} className={styles.item}>
          <span className={styles.label}>{statData.label}</span>
          <span className={styles.percentage}>{statData.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
