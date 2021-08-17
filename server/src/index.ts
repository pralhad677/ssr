import express from 'express';
import React from 'react'
import ReactDOMServer  from 'react-dom/server.js'
// import {App} from './client/component/index'
import  App from './client/component/index'

// console.log(reactDomServer.renderToString)
const app = express();
app.use('/static', express.static(__dirname + '/static'));
app.get('/', (req, res) => {
//    const data= reactDomServer.renderToString(<Home /> as React.FC) 
const data =  ReactDOMServer.renderToString(React.createElement(App))
// const data =  ReactDOMServer.renderToStaticMarkup(React.createElement(App))
    res.send(data);
})
const port = Math.ceil(Math.random()*10000)
app.listen(`${port}`, () => {  
    console.log(`The application is listening on port ${port}!`);
    // console.log('The application is listening on port 3002!'); 
    // console.log('The application is listening on port 3003!');
    // console.log('The application is listening on port 3004!');
    // console.log('The application is listening on port 3005!'); 
    // console.log('The application is listening on port 3006!'); 
}) 