import React, { Component } from 'react';
import axios from '../../axios';
import './FullPost.css';
import classes from './FullPost.css';
class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( '/api/feed/' + this.props.id +'/')
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }


    deletePosthandler = () =>{
        axios.delete('/feed/' + this.props.id +'/')
        .then(response =>{
            console.log(response);
        })
    };


    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.content}</p>
                    <div className="Edit">
                        <button onClick={this.deletePosthandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;
