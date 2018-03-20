import ReactGA from 'react-ga';

ReactGA.initialize('UA-75725762-2');

exports.onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV === 'production') {
    console.log('Pageview');
    ReactGA.pageview(location.pathname);
  }
};
