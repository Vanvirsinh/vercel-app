import { start_mongo } from "$db/mongo";

start_mongo()
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => console.log(`Error: ${err}`));