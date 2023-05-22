import express from 'express'
import { Request, Response } from 'express'
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // https://swagger.io/specification/


const app = express()

//show options bar
var options = {
    explorer: true
  };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.get('/', (req:Request, res:Response) => {
    res.status(200).json({
        msg: "bạn đang vào route home"
    })
})

app.listen(3002, () => {
    console.log('server đang chạy trên cổng 3002')
})