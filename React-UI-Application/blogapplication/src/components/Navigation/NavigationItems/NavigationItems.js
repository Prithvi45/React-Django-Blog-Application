import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/test" exact>About</NavigationItem>
        <NavigationItem link="/orders">Add Post</NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/signup">Signup</NavigationItem>
    </ul>
);

export default navigationItems;
