import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Posts from './Posts/Posts'
import './Blog.css';
import classes from './Blog.css';

import {Route, Switch} from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div>
                <section>
                </section>
              {/*<Route path="/" exact render={() =><h2>Home Page</h2>} /> */ }
              <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/posts/:id" exact component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;
