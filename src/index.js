import express from 'express'
const app = express()
import reactDomServer from 'react-dom/server.js'
let {renderToString} =reactDomServer
import App from './client/component/index.js'

app.get('/',(req,res,next)=>{
    const data = renderToString(React.createElement(App))
    res.send(data)
})

app.listen(3123,()=>{
    console.log("connected")
})