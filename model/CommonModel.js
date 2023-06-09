import DB from "../config/database.js";


export const get = async (table,select='*') => {
    const query = `SELECT ${select} FROM ${table}`;
    const data = await DB.query(query);
    const res =  {
            success:true,
            data:data.rows,
            total:data.rowCount
        }
    
    return res;

}

export const show = async (table,condition,select='*') => {
    const query = `SELECT ${select} FROM ${table} WHERE id=${condition}`;
    const {rows} = await DB.query(query);
    
    return rows;
}

export const create = async (table,data)=> {
    let query = false;
    let keys = values = '';
    if(typeof data == 'object'){
        Object.keys(data).forEach(key => {
            // console.log(key, data[key]);
            keys += ` ${key},`
            values += `'${data[key]}',`;
            });

        keys = keys.slice(0, -1);
        values = values.slice(0, -1)
        query = `INSERT INTO ${table} (${keys}) VALUES(${values}) RETURNING *`
    }
    
    const res = await DB.query(query);
    return res.rows;
}

export const update =  async (table,data,condition) => {

    let query = `UPDATE ${table} SET `;
    if(typeof data == 'object'){
        Object.keys(data).forEach(key => {
            // console.log(key, data[key]);
            query += `${key}='${data[key]}',`
            });

        query = query.slice(0, -1);
        // query = `INSERT INTO ${table} SET ${data} RETURNING *`;
    }
    
    query += ` WHERE id=${condition} RETURNING *`
    const res = await DB.query(query);
    return res.rows;

}


export const deleteData = async (table,condition) => {
    await DB.query(`DELETE FROM ${table} WHERE id=${condition}`);
}

