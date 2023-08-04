import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from 'components/meetups/MeetupList';

const Home = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a list of interesting React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// fetching data for pre-rendering (using Static Site Generation SSG)
// this code that is executed during building (it will never execute on the client)
// if revalidate is set, will be executed in the server, every x seconds
// name is mandatorily getStaticProps
// return value should be an object
// props property (optional) has to be named props
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.en5gbtf.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
      // for incremental Static Generation -> this page would be regenerated on the server at least every second
      // if there are requests coming in for this page
      revalidate: 1,
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
