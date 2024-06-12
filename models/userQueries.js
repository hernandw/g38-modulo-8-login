import { pool } from '../config/db.js';

export const addUserQuery = async (name, email, password) => {
    try {
      const sql = {
        text: "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
        values: [name, email, password],
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) {
        return true;
      } else {
        return new Error("Error al registrar el usuario");
      }
    } catch (error) {
      console.log("Error code: ", error.code, "Error message: ", error.message);
    }
  };