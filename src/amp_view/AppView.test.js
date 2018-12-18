import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AppView from './AmpView';

describe('<AppView/>', ()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppView />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

