import React from 'react';
import CommentList from '../CommentList/CommentList';
import Root from '../../Root';
import { mount } from 'enzyme';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['comment1', 'comment2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('creates one <li> per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text from each comment', () => {
    expect(wrapped.render().text()).toContain('comment1');
    expect(wrapped.render().text()).toContain('comment2');
});