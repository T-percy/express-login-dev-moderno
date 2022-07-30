import express from 'express';
import { body } from "express-validator";
import { register, login } from "../controllers/auth.controller.js";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";

const router = express.Router();

router.post('/register', 
    [
        body('email', 'Formato de email incorrecto')
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', 'El password debe tener mínimo 6 caracteres').trim().isLength({min:6}),
    ],
    validationResultExpress,
    register);

router.post('/login',
    [
        body('email', 'Formato de email incorrecto')
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', 'El password debe tener mínimo 6 caracteres').trim().isLength({min:6}),
    ],
    validationResultExpress,
    login);

export default router;