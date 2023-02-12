import  express, { Request, Response} from 'express';
import cors from 'cors';
import { db } from './database/knex';
import { Video } from './models/Videos';
import { TVideoDB } from './types';




const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get('/ping', (req: Request, res: Response) => {
  res.send('Pong!')
});


app.get('/videos', async (req: Request, res: Response)=>{
    try {
        const q = req.query.q

        let videoDB

        if (q) {
            const result: TVideoDB[] = await db("videos").where("name", "title", `%${q}%`)
            videoDB = result
        } else {
            const result: TVideoDB[] = await db("videos")
            videoDB = result
        }

        const videos = videoDB.map((videoDB)=> new Video(
            videoDB.id,
            videoDB.title,
            videoDB.video_time,
            videoDB.upload_date
        ))

        res.status(200).send(videos)


    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }

});




