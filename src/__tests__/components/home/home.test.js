import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from '../../../components/cars/Home';
import store from '../../../redux/configureStore';

it('Cars renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
