import { db } from '../appwriteConfig'
import { ID } from 'appwrite'
import { pass } from '../pass'
export const upDateTask = async (data) => {
    try {
        const response = await db.updateRow({
            databaseId: pass.VITE_APPWRITE_DB_ID
            , tableId: pass.VITE_APPWRITE_TABLE_TODO_lIST,
            rowId: data.$id,
            data: data
        });
        console.log(response)
        return response
    } catch (error) {
        console.log(error)

    }
}
export const addTask = async (data) => {
    try {
        const response = await db.createRow({
            databaseId: pass.VITE_APPWRITE_DB_ID
            , tableId: pass.VITE_APPWRITE_TABLE_TODO_lIST,
            rowId: ID.unique(),
            data: data
        });
        return response
    } catch (error) {
        console.log(error)

    }
}
export const deleteTask = async (data) => {
    try {
        const response = await db.deleteRow({
            databaseId: pass.VITE_APPWRITE_DB_ID
            , tableId: pass.VITE_APPWRITE_TABLE_TODO_lIST,
            rowId: data.$id,
        });
        console.log(response)
        return response
    } catch (error) {
        console.log(error)

    }
}

export const getTasks = async () => {
    try {

        //total rows
        const { total, rows } = await db.listRows({
            databaseId: pass.VITE_APPWRITE_DB_ID
            , tableId: pass.VITE_APPWRITE_TABLE_TODO_lIST
        })


        return rows;
    } catch (error) {
        console.log(error)
        return []
    }
}