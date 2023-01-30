import { Router } from "express";
import express from "express"
import path from 'path'
const router = Router()


router.get('/game', (req,res)=>{
    res.sendFile(path.resolve(__dirname+'hola.html'))
})

router.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname+'index.html'))
})

export { router as pageRouter }