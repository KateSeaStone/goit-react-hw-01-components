import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function ProfileStatsItem({ label, quantity }) {
  return (
    <li>
      <span class={styles.label}>{label}</span>
      <span class={styles.quantity}>{quantity}</span>
    </li>
  );
}

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
