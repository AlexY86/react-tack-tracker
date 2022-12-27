import { Link } from 'react-router-dom';

// added footer for ablility to route to About
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer