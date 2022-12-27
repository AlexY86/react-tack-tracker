import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from '../button/Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}
// setting the default Props for title
Header.defaultProps = {
  title: 'To-Do Tracker',
}
// adding in propTypes will allow you to check for errors on what is passed
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header