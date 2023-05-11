import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={css.loader}>
      {
        <Oval
          height={100}
          width={100}
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
