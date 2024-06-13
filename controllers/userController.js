import { addUserQuery, verifyUserQuery } from "../models/userQueries.js";
import bcrypt from 'bcrypt';

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

  export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await verifyUserQuery(email);
      console.log(result);
      if (result) {
        const passwordMatch = await bcrypt.compare(password, result.password);
        console.log('passwordMatch',passwordMatch);
        if (passwordMatch) {
          res.status(200).render("dashboard", {
            title: "Dashboard Page",
            user: result,
          });
        } else {
          res.status(401).send("Contraseña incorrecta");
        }
      } else {
        res.status(401).send("Usuario no encontrado");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };