# Password Genie

[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)
[![GitHub Release](https://img.shields.io/github/release/tterb/PlayMusic.svg?style=flat)]() 

## Description 
            
This is a web application that allows a user to create and store passwords in an encrypted database. The frontend is built using HTML5, Bootstrap 4, CSS, JavaScript, jQuery, Animate, Popper, Handlebars, and Owl Carousel. The backend is powered by a Sequelize ORM that uses Bcrypt to hash user data as it is stored, and passport to verify user information before allowing login access to user data.      
               
## Installation

### This application requires the following dependencies:  
#### Bcrypt
#### Express
#### Handlebars
#### MySQL
#### Sequelize
#### Passport             
            
## Usage 
            
To use the password generator on the landing page simply click the 'Generate Password' button and follow the prompts in the alert messages from your browser. In order to save passwords, you will first need to create an account. If you have used this app before you can login to access the username and passwords that you have previously saved.  

## Notes

This application is still in version 1.0.0 and has a few bugs we plan to fix in the coming weeks. At this time, the database that a user accesses after logging in is not unique. We plan to add a filter to the data query t
hat will only find data stored by the id of the user currently logged in. Next, we would like to add the Bcrpyt hasher to the usernam
e and password information stored on the members page of the site. 
            
## License
            
Copyright <2020> <COPYRIGHT>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                
