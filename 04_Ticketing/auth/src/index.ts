import express from 'express';
import {json} from 'body-parser';

const PORT = 3000;
const app = express();
app.use(json());

app.get('/',(req,res)=>{
    res.send('Hello there!');
})

app.listen(PORT,()=>{
    console.log(`App is listining on http://localhost:${PORT}`);
})