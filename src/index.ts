import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Import router
import routerAuth from './router/authen';

const app = express();

// Swagger configuration options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Authentication API',
      version: '1.0.0',
      description: 'API for user authentication',
    },
  },

  apis: ['./src/router/authen.ts'], // Specify the file(s) where JSDoc annotations are present
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use('/auth', routerAuth);
app.get('/', (req, res) => {
  res.status(200).json({
    message: "Bạn đã truy cập vào link http://localhost:3002"
  })
})

app.listen(3002, () => {
  console.log('Server đang chạy trên cổng 3002');
  console.log('Swagger chạy trên link: http://localhost:3002/api-docs');
});
