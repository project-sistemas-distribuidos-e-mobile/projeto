import expres from 'express';
import routes from './routes';
import cors from 'cors';

const app = expres();

app.use(cors({
    origin: 'http://localhost:4200'
}));


app.use(routes);

app.listen(5000, () => {
    console.log('Server is running.');
})