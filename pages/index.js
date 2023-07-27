import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://images.pexels.com/photos/2549573/pexels-photo-2549573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Praça da Ribeira, 1025 Porto',
    description: 'This will be our first meetup in Porto!',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://images.pexels.com/photos/5193169/pexels-photo-5193169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Praça da Ribeira, 1025 Porto',
    description: 'This will be our secont meetup in Porto!',
  },
];

const Home = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Home;
