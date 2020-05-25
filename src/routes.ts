import { Request, Response} from 'express';
import  createUser  from './services/CreateUser';


export function helloWorld(request: Request, response: Response){
    const user = createUser({
        name: 'teste',
        email: 'teste@email.com',
        password: '122233',
        techs: ['NodeJs', { title: 'dev', experience: 5}],
    });

    return response.json({message: 'Hello World'});
}