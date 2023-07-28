// our-domain.com/[meetupId]

import MeetupInfo from 'components/meetups/MeetupInfo';

const MeetupDetailsPage = () => {
  return (
    <MeetupInfo
      image="https://images.pexels.com/photos/2549573/pexels-photo-2549573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      title="The first meetup"
      address="Praça da Ribeira, 1025 Porto"
      description="The meetup description"
    />
  );
};

export default MeetupDetailsPage;
