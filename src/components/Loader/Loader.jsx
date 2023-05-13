import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css'
import PropTypes from 'prop-types';

const Loader = () => {
  return (
    <div className={css.loader}>
      {
        <Oval
          height={120}
          width={120}
          color="grey"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="grey"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      }
    </div>
  );
};
export default Loader;

Oval.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  strokeWidthSecondary: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  wrapperStyle: PropTypes.object.isRequired,
};


