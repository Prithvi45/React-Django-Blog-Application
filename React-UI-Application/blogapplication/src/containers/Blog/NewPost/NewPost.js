import React, { Component } from 'react';

import classes from './NewPost.css';
import axios from '../../../axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        image:''
    }

    fileSelectHandler = event =>{
      console.log("===================")
      console.log(event.target.files[0])
      this.setState({image:event.target.files[0]})
    };

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            image:this.state.image
            // author: this.state.author
        };
        axios.post('http://127.0.0.1:8080/api/feed/', data)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Upload Image</label>
                <input type="file" onChange={this.fileSelectHandler}/>

                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
