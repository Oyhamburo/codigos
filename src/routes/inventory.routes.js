import { Router } from "express";
// import { inventoryController } from "../controller/index.controller.js";
const router = Router()

router.get('/',adminPermiss, inventoryController.getAll)

router.get('/:id', inventoryController.getById)

router.post("/", inventoryController.addNew);

router.put("/:id", inventoryController.updateById);

router.delete("/:id", inventoryController.deleteById);

router.put("/:id", inventoryController.addObject);

router.put("/:id", inventoryController.removeObject);

router.put("/:id", inventoryController.equiptem);

export { router as userRoute }
