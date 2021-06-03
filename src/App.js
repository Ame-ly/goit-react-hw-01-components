import React from 'react';
import SocialProfile from './components/SocialProfile/SocialProfile';
import Statistics from './components/Statistics/Statistics';
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import 
  user
  from './components/SocialProfile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import items from './components/TransactionHistory/transactions.json';



const App = () => (
  <div>
    <SocialProfile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />;
    {/* <Statistics stats={statisticalData} />; */}
    <FriendList friends={friends} />
    <TransactionHistory items={items} />;
  </div>
);


export default App;