import React, { Component } from 'react';
import axios from '../../../axios';
import classes from './FullPost.css';


class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidMount () {
      console.log(this.props.match.params.id)
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id) ) {
                axios.get( '/api/feed/' + this.props.match.params.id +'/')
                    .then( response => {
                        // console.log(response.data);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePosthandler = () =>{
        axios.delete('/feed/' + this.props.match.params.id +'/')
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
                      <img src={this.state.loadedPost.image}></img>
                    <p>{this.state.loadedPost.content}</p>
                    <p><b>By:- {this.state.loadedPost.user_profile}</b></p>
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
