import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';

// our-domain.com/[meetupId]

import MeetupInfo from 'components/meetups/MeetupInfo';

const MeetupDetailsPage = (props) => {
  const { image, title, address, description } = props.meetupData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupInfo
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
};

// getStaticPaths is needed in dynamic pages
// to define fo which dynamic parameter values
// the page should be pre-generated
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.en5gbtf.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // fallback allows us to define only for some paths,
    // instead of all paths
    // set to false if all supported paths are defined here
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.en5gbtf.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  // const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetailsPage;
