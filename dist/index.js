import express from 'express';
// console.log(reactDomServer.renderToString)
const app = express();
app.get('/', (req, res) => {
    //    const data= reactDomServer.renderToString(<Home /> as React.FC) 
    //     res.send(data);
    // reactDomServer.renderToString(<App /> as ReactElement)
});
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
    console.log('The application is listening on port 3002!');
    console.log('The application is listening on port 3003!');
    console.log('The application is listening on port 3004!');
    console.log('The application is listening on port 3005!');
    // console.log('The application is listening on port 3006!'); 
});
