import React from 'react';
import App from '../App/App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox/CommentBox';
import CommentList from '../CommentList/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});