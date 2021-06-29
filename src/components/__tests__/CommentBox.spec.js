import { mount } from 'enzyme';
import React from 'react';
import Root from '../../Root';
import CommentBox from '../CommentBox/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the textarea', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target: { value: 'new comment' } });
        wrapped.update();
    });

    it('has a textarea and users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('has a textarea submitted and textarea empty', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})