import { Router } from "express";
import { Request, Response } from "express";
import Joi from 'joi';
const routerAuth = Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     auth:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Tên đăng nhập
 *         password:
 *           type: string
 *           description: Mật khẩu
 *     responses:
 *       200:
 *         description: Thành công
 */
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     description: API để đăng nhập người dùng
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/auth'
 */

const schema = Joi.object({
  username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required().messages({
        'string.base': 'Username must be a string',
        'string.alphanum': 'Username must only contain alphanumeric characters',
        'string.min': 'Tên người dùng phải có ít nhất 3 ký tự',
        'string.max': 'Username must have a maximum length of {#limit}',
        'any.required': 'Username is required',
      }),

  password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  // repeat_password: Joi.ref('password'),

})
  


routerAuth.post("/login", (req: Request, res: Response) => {
  console.log(req.body)
  const {error, value} = schema.validate(req.body)
  if(error) {
    res.status(400).json({error: error.details[0].message});   //trả về message lỗi khi bất kỳ trường nào là không hợp lệ
    return 
  }
  res.status(200).json({
    message: "login thành công111111",
    data: value
  });
});

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: register user
 *     description: API đăng ký
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Tên đăng nhập
 *               password:
 *                 type: string
 *                 description: Mật khẩu
 *     responses:
 *       200:
 *         description: Thành công
 */

routerAuth.post("/register", (req: Request, res: Response) => {
  res.status(200).json({
    message: "register thành công",
  });
});
export default routerAuth;
