import PropTypes from "prop-types";

const Header = ({ title='No hay título' }) => {
  return (
    <div className="section">
      <h1 className="title is-1 has-text-centered">{title}</h1>
    </div>
  );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
