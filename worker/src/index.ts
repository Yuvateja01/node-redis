
import { createClient } from "redis";


const client = createClient();


async function startServer() {
    await client.connect();
    while(1){
        const data = await client.brPop("problems",0)
        console.log(data)
    }

}

startServer();

