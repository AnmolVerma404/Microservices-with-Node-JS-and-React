import express from 'express';
import {json} from 'body-parser';

const PORT = 3000;
const app = express();
app.use(json());

app.get('/api/users/currentuser',(req,res)=>{
    res.send('Hi there!');
})

app.listen(PORT,()=>{
    console.log(`App is listining!!! on http://localhost:${PORT}`);
})