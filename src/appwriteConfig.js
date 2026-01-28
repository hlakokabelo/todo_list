import { Client, TablesDB } from "appwrite";


// @desc client credentials
export const clientCred = {
  PROJECT_ID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  PROJECT_NAME: import.meta.env.VITE_APPWRITE_PROJECT_NAME,
  ENDPOINT: import.meta.env.VITE_APPWRITE_ENDPOINT,
  DB_ID: import.meta.env.VITE_APPWRITE_DB_ID,
  TABLE_ID_TO_DO_LIST: import.meta.env.VITE_APPWRITE_TABLE_ID_TO_DO_lIST,
};

const client = new Client();

client.setEndpoint(clientCred.ENDPOINT);
client.setProject(clientCred.PROJECT_ID);

const db = new TablesDB(client);

export { client, db };
