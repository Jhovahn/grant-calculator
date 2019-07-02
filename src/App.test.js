import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have three unordered lists', () => {
  const app = shallow(<App />);
  expect(app.find('ul')).toHaveLength(3);
});

it('should have six buttons', () => {
  const app = shallow(<App />);
  expect(app.find('button')).toHaveLength(6);
});

it('should have five user input fields', () => {
  const app = shallow(<App />);
  expect(app.find('input')).toHaveLength(5);
});
