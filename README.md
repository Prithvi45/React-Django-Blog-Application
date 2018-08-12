# React-Django-Blog-Application
This project demonstrates the Integration of React with Django Backend over REST API, this project has two different applications
1. [Django Blog Backend Application](https://github.com/Prithvi45/React-Django-Blog-Application/tree/master/Django-Backend-Application)
2. [React UI for Blog](https://github.com/Prithvi45/React-Django-Blog-Application/tree/master/React-UI-Application)


### Functionalities

- Create, Update and Delete User Profiles
- Login (Token based Authentication)
- Blog listing and detailed view
- Create, Update and Delete blog posts

Note: We will be executing django application on ubuntu machine, to achieve this we will run ubuntu on Vagrant


## Requirements 

* [Vagrant](https://www.vagrantup.com/)
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* [Nodejs](https://nodejs.org/en/download/)


## Getting started

First install VirtualBox and Vagrant. 

Clone this repository

```bash
git clone https://github.com/Prithvi45/React-Django-Blog-Application.git
```

## Create and provision the VMs

```bash
cd React-Django-Blog-Application/Django-Backend-Application/
vagrant up
```
**Note:** the above can take several minutes, especially the first time it runs (needs to download the Ubuntu Vagrant Box and install the required packages on each VM). This will take long only the first time, starting and stoping the VMs hereafter will be significantly faster. 

**Connect to ubuntu virtual machine via ssh**

```bash
vagrant ssh
```
**Install all python packages**
```bash
cd /vagrant/blogproject/
pip install requirements.txt
```

**Start Django development server**

```bash
python manage.py runserver 0.0.0.0:8080

```

After executing above commands , check django development server running on http://127.0.0.1:8080/api/

Here we are done with backend part, lets go to React App

Navigate to  React-Django-Blog-Application/React-UI-Application/blogapplication from NodeJs terminal and execute below command to start our react project

```bash
npm install package.json
npm start
```
once we run above command a new web page opens in your default browser
