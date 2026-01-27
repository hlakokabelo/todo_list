import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dontev from 'dotenv'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
'process.env.VITE_APPWRITE_PROJECT_ID':JSON.stringify(process.env.VITE_APPWRITE_PROJECT_ID),
'process.env.VITE_APPWRITE_PROJECT_NAME':JSON.stringify(process.env.VITE_APPWRITE_PROJECT_NAME),
'process.env.VITE_APPWRITE_ENDPOINT':JSON.stringify(process.env.VITE_APPWRITE_ENDPOINT),
'process.env.VITE_APPWRITE_DB_ID':JSON.stringify(process.env.VITE_APPWRITE_DB_ID),
'process.env.VITE_APPWRITE_TABLE_TODO_lIST':JSON.stringify(process.env.VITE_APPWRITE_TABLE_TODO_lIST)} 
 
})
