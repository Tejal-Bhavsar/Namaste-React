Chapter 01 - Inception

1.What is Emmet? 
emmet is add pluggin for the text editors/ IDE it makes writing css, js easy peasy along with editing 
structured code formates.
https://ubahthebuilder.tech/list-of-emmet-keyboard-shortcuts-for-quickly-generating-html 
--emmet shortcuts

2.Difference between a Library and Framework?
Library - its collection of prewritten small size code which a developer can implement or use 
inside his project to simplify their work and speed up the development process. 
In case of library a developer is in can control where to call or use the it. Framework - 
its full fleged setup where everythig is build up already from scratch to provide a environment 
to build applications.its simply collection of libraries build together.

main diffrence between both of them is inversion control, 
means in framwork library is controling the flow of programs and in case of library its decided by 
the dev where it will be used.

What is CDN? Why do we use it?
A CDN, or content delivery network, is a geographically distributed network or collection of 
servers in diffrent locations allowing to speed up content delivery from one location to another in 
quick and efficient ways. Improving website load times Reducing bandwidth costs Increasing content availability
and redundancy Improving website security

Why is React known as React? 
React was developed for applications (Facebook) that have constantly changing data.
Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and 
changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks,
typing, submitting a form.

What is crossorigin in script tag? 
The crossorigin attribute sets the mode of the request to an HTTP CORS Request,When we make a request from 
one origin (Requestor) to another origin (Sender) then network will blocks the request, to make it work we
need to enable crossorigin then only resource is
fetched to the origin(requestor).
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin https://www.w3schools.com/tags/att_script_crossorigin.asp

What is diference between React and ReactDOM 
React is a javascript library, designed for building better user interfaces.
React-DOM is a complimentary library to React which glues React to the browser DOM.
React has nothing to do with a browser or web for that matter. React-DOM binds the idea of React to a web browser.
The reason React and ReactDOM were split into two libraries was due to the arrival of React Native.
React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.
[UPDATE: Upon further research, it's clear my ignorance of React Native is showing. 
Having the React package common to both web and mobile appears to be more of an aspiration than 
a reality right now. React Native is at present an entirely different package.]

What is difference between react.development.js and react.production.js files via CDN?
react.development.js CDN are development dependencies which are not being used in PRODUCTION
react.development.js CDN is minified version of developement CDN which are suitable for production use.

What is async and defer? - see my Youtube video ;) https://www.youtube.com/watch?v=IrHmpdORLu8
