import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.css'
import {Link} from 'react-router-dom';

class Posts extends Component {
  state = {
      posts: [],
      selectedPostId: null,
      error:false
  }

  componentDidMount () {
    console.log(this.props)
      axios.get( '/api/feed/' )
          .then( response => {
              console.log(response)
              { /*const posts = response.data.slice(0, 4); */}
                const posts = response.data ;
              const updatedPosts = posts.map(post => {
                  return {
                      ...post,
                      author: post.user_profile,
                      image:post.image
                  }
              });
              this.setState({posts: updatedPosts});
              // console.log( response );
          } )
          .catch(error => {
              // console.log(error);
              this.setState({error: true});
          });
  }

  postSelectedHandler = (id) => {
      this.setState({selectedPostId: id});
  }

  render(){
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

    if (!this.state.error) {
        posts = this.state.posts.map(post => {
            return <Link to={'/posts/' + post.id} key={post.id} ><Post

                title={post.title}
                author={post.author}
                image={post.image}
                clicked={() => this.postSelectedHandler(post.id)} />;
                </Link>
        });
    }

    return (
      <section className={classes.Posts}>
      {posts}
      </section>
    );
  }
}

export default Posts;
