import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = props => {
  const onClickFindJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }
  return (
    <>
      <Header />
      <div className="home-app">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-des">
          Millions of people are searching for jobs, salray, information,
          company reviews. Find the job that fits your abilites and potential.
        </p>
        <Link to="/jobs" className="link">
          <button type="button" className="home-btn" onClick={onClickFindJobs}>
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
