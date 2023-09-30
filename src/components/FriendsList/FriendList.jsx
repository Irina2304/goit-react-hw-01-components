import { FrendListItem } from '../FriendListItem/FrendListItem';

export const FriendsList = ({friends}) => {
  return(
    <ul className="friend-list">
      {friends.map((friend) => (
        <FrendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />))
      }
    </ul>
  )
}