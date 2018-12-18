import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AmpList from './AmpList';

describe('<AmpList/>', ()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AmpList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

