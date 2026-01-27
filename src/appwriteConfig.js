import { Client, TablesDB } from "appwrite";
import { pass } from "./pass";

const client = new Client();

client.setEndpoint(pass.VITE_APPWRITE_ENDPOINT);
client.setProject(pass.VITE_APPWRITE_PROJECT_ID);

const db = new TablesDB(client);

export { client, db };
