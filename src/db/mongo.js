import { MongoClient } from 'mongodb';
const URL = "mongodb+srv://deoravanvirsinh7773:8wHxPkZ07seriKCe@cluster0.a0raosu.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(URL);

export function start_mongo() {
    console.log("Connecting to MongoDB...");
    return client.connect();
}

export default client.db();