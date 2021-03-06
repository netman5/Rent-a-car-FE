import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Register from '../../../../components/forms/Register';

import store from '../../../../redux/configureStore';

it('Register renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Register />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
