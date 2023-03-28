import MeetupItem, { IMeetupItem } from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetupList: React.FC<{ meetups: IMeetupItem[] }> = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
