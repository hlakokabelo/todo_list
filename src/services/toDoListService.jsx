import { clientCred, client, db, } from '../appwriteConfig'
import { ID, Permission, Role } from 'appwrite'

export const upDateTask = async (data) => {
    try {
        const response = await db.updateRow({
            databaseId: clientCred.DB_ID
            , tableId: clientCred.TABLE_ID_TO_DO_LIST,
            rowId: data.$id,
            data: data
        });
        return response
    } catch (error) {
        return error

    }
}


export const addTask = async (data) => {
    try {  
        //grunts current user the person to delete and update current message
        const permissions = [
            Permission.write(Role.user(user.$id)),
            Permission.read(Role.user(user.$id))
        ]
        const response = await db.createRow({
            databaseId: clientCred.DB_ID
            , tableId: clientCred.TABLE_ID_TO_DO_LIST,
            rowId: ID.unique(),
            data: data,
        });
        return response
    } catch (error) {
        return (error)

    }
}
export const deleteTask = async (data) => {
    try {
        const response = await db.deleteRow({
            databaseId: clientCred.DB_ID
            , tableId: clientCred.TABLE_ID_TO_DO_LIST,
            rowId: data.$id,
        });
        return response
    } catch (error) {
        return (error)

    }
}

export const getTasks = async () => {
    try {

        //total rows
        const { total, rows } = await db.listRows({
            databaseId: clientCred.DB_ID
            , tableId: clientCred.TABLE_ID_TO_DO_LIST,
        })


        return rows;
    } catch (error) {
        return []
    }
}