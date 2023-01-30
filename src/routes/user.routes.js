import { Router } from "express";
// import { userController } from "../controller/index.controller.js";
const router = Router()

router.get('/',adminPermiss, userController.getAll)

router.get('/:id', userController.getById)

router.post("/", userController.addNew);

router.put("/:id", userController.updateById);

router.delete("/:id", userController.deleteById);

export { router as userRoute }
