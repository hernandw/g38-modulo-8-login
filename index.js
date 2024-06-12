import express from 'express';
import userRoutes from './routes/userRouter.js'
import { engine } from 'express-handlebars';
const app = express();
const PORT = process.env.PORT || 3000;

//Motor de Plantilla
app.engine('hbs', engine({
    extname: '.hbs',
    
}));
app.set('view engine', 'hbs');
app.set('views', './views');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', userRoutes)


app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));