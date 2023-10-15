const EventsPage = ({title}) => {
  return (
    <>
      <h1> {title} </h1>
      <a href=''>
            <img />
            <h2> Events in London </h2> 
          </a>
          <a href=''>
            <img />
            <h2> Events in Fransisco </h2> 
          </a>
          <a href=''>
            <img />
            <h2> Events in Barcelona </h2> 
          </a>
    </>
  );
}

export default EventsPage;

export function getServerSideProps() {
  return {
    props: {
      title: 'Hello everyone!'
    }
  }
}