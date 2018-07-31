import React from 'react';

import './Post.css';
import classes from './Post.css';
const post = (props) => (
    <article className={classes.Post} onClick={props.clicked}>
    <h1>{props.title}</h1>
    <img src="http://www.zekelabs.com/static/media/photos/2017/12/03/r-programming-training-in-banglore-800-500.jpg"></img>
    
    <div className="Info">
        <div className={classes.Author}>{props.author}</div>
    </div>
    </article>
);

export default post;