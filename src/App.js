import Profile from './components/Profile/Profile';
import user from './user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        name={user.name}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
