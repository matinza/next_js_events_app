import styles from '@/styles/Home.module.css'

const EventsCatPage = () =>{
  return (
    <>
      <h1> Events in London </h1>
      <div className={`${styles.header}`}>
        <a href=''>
          {' '}
          Event 1
          <img />
        </a>
        <a href=''>
          {' '}
          Event 2
          <img />
        </a>
        <a href=''>
          {' '}
          Event 3
          <img />
        </a>
        <a href=''>
          {' '}
          Event 4
          <img />
        </a>
        <a href=''>
          {' '}
          Event 5
          <img />
        </a>
        <a href=''>
          {' '}
          Event 6
          <img />
        </a>
      </div>
    </>
  )
}

export default EventsCatPage;