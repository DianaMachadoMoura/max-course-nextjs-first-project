import MeetupList from 'components/meetups/MeetupList';

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

const Home = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// fetching data for pre-rendering (using Static Site Generation SSG)
// this code that is executed during building (it will never execute on the client)
// if revalidate is set, will be executed in the server, every x seconds
// name is mandatorily getStaticProps
// return value should be an object
// props property (optional) has to be named props
export const getStaticProps = async () => {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
      // for incremental Static Generation -> this page would be regenerated on the server at least every 10 seconds
      // if there are requests coming in for this page
      revalidate: 10,
    },
  };
};

// this function will always run on the server, on every incoming request
// when to use: 
// - access to the concrete request object is needed (no access to it when using getStaticProps)
// - when data changes multiple times every second (revalidate won't help)
// export const getServerSideProps = async (context) => {
//   const req = context.req;  //request object
//   const res = context.res;  //response object

//   // fetch data from an API
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// };

export default Home;
