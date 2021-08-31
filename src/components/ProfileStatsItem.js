import PropTypes from 'prop-types';

export default function ProfileStatsItem({ label, quantity }) {
  return (
    <li>
      <span class="label">{label}</span>
      <span class="quantity">{quantity}</span>
    </li>
  );
}

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
