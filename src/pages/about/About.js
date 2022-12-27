import { Link } from 'react-router-dom'

const About = () => {
  return (
    //added in the link to instead of
    //a tag to make more seamless transaction. 
    <div>
      <h2>Version 1.0.0</h2>
      <h4>About page added in to show routing</h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About