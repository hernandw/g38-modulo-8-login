import { addUserQuery } from "../models/userQueries.js";

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
   
      console.log(req.body);
  
      await addUserQuery(name, email, password);
      res.status(201).redirect("/login");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };