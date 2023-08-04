import classes from './MeetupInfo.module.css'

const MeetupInfo = (props) => {
  return (
    <section className={classes.info}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupInfo;
