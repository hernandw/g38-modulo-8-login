import { addUserQuery, verifyUserQuery } from "../models/userQueries.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const secretkey = process.env.JWT_SECRET_KEY;

export const home = (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
};

export const about = (req, res) => {
  res.render("about", {
    title: "About Page",
  });
};

export const contact = (req, res) => {
  res.render("contact", {
    title: "Contact Page",
  });
};

export const loginForm = (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
};

export const registerForm = (req, res) => {
  res.render("register", {
    title: "Register Page",
  });
};

export const dashboard = (req, res) => {
  res.render("dashboard", {
    title: "Dashboard Page",
  });
};


export const addUser = async (req, res) => {
    try {
      const { name, email, password, confirmPassword } = req.body;
      const passwordHash = await bcrypt.hash(password, 10);
   
      console.log(req.body);
  
      await addUserQuery(name, email, passwordHash);
      res.status(201).redirect("/login");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  export const login =  async(req, res)=>{
    const {email, password} = req.body;
    try {
        const result = await verifyUserQuery(email);
        const passwordMatch = await bcrypt.compare(password, result.password);
        if(!passwordMatch){
            return res.status(401).send("Contraseña incorrecta")
        }
        //construimos el token si existe el usuario
        const token = jwt.sign({user: result.name, email: result.email}, secretkey, {expiresIn: '10s'});
        console.log(token)

        //Guardamos el token en la cookie
        res.cookie('token', token);
        res.status(200).render('dashboard', {
            title: 'Dashboard Page',
            user: result,
            button: true
           
        });
    } catch (error) {
        res.send(error.message)
    }
}