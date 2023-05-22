import express from 'express'
import { Request, Response } from 'express'
const app = express()

app.get('/', (req:Request, res:Response) => {
    res.status(200).json({
        msg: "bạn đang vào route home"
    })
})

app.listen(3002, () => {
    console.log('server đang chạy trên cổng 3002')
})