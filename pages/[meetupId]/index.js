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

// getStaticPaths is needed in dynamic pages 
// to define fo which dynamic parameter values
// the page should be pre-generated
export const getStaticPaths = async () => {
  // fetch meetup ids

  return {
    // fallback allows us to define only for some paths, 
    // instead of all paths
    // set to false if all supported paths are defined here
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  // fetch data for a single meetup

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://images.pexels.com/photos/2549573/pexels-photo-2549573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'The first meetup',
        address: 'Praça da Ribeira, 1025 Porto',
        description: 'The meetup description',
      },
    },
  };
};

export default MeetupDetailsPage;
