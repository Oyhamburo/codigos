import { Router } from "express";
import passport from "passport";
import { Authenticated } from "../middlewares/index.middlewares.js"
const router = Router()

router.post(
    "/login",
    passport.authenticate("login", { failureRedirect: "/faillogin" }),
    (req, res) => {
        console.log('autentico')
        // res.redirect("/");
    }
);

router.post(
    "/register",
    passport.authenticate("register", { failureRedirect: "/failregister" }),
    (req, res) => {
        console.log('registrado')
        // res.redirect("/");
    }
);

  router.get("/",Authenticated, (req, res) => {
      res.redirect("/");
  });
export { router as viewsRouter }