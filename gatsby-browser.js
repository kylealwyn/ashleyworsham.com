import ReactGA from 'react-ga';

ReactGA.initialize('UA-75725762-2');

exports.onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview(location.pathname);
  }
};
