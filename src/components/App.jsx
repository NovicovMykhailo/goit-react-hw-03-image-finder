import Loader from './Loader/Loader';
// import { Oval } from 'react-loader-spinner';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Loader />

    </div>
  );
};
