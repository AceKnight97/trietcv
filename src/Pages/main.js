import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import { PAGE_MANAGER } from '../Constants';
import reloadPageRequest from '../Redux/Actions/reload';
import MyCV from './MyCV';
import Home from './Home';

const Main = (props) => {
  useEffect(() => {
    window.onbeforeunload = () => {};
    window.onload = () => {
      props.reloadPageRequest();
    };
    // window.onload = () => {
    //   props.reloadPageRequest();
    // };
  }, []);
  return (
    <main className='div-root'>
      <Router>
        <Switch>
          <Route path='/trietcv' name='My CV' component={MyCV} />
          {/* <Route path='/acestore' name='Home' component={Home} /> */}
          <Redirect path='/' to={{ pathname: '/trietcv' }} />
        </Switch>
      </Router>
    </main>
  );
};

Main.defaultProps = {};

Main.propTypes = {
  reloadPageRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  reloadPageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
