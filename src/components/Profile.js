import PropTypes from 'prop-types';
import ProfileStatsItem from './ProfileStatsItem';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="Аватар пользователя" class="avatar" width="120" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        {Object.keys(stats).map(key => (
          <ProfileStatsItem key={key} label={key} quantity={stats[key]} />
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
