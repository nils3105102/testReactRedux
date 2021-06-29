import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveComment } from '../../actions';

const CommentBox = (props) => {
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveComment(comment));
        setComment('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea onChange={handleChange} value={comment} />
            <div>
                <button>Submit comment</button>
            </div>
        </form>
    );
}

export default CommentBox;