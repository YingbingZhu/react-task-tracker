import { Link } from 'react-router-dom'
// client-side navigation.
// It prevents the default browser behavior of reloading the page and allows for smooth transitions between routes within the single-page application.
const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About