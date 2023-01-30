import { Inventory } from "../../models/index.models.js"
import { InventoryDao } from "../../app.js"

const controller = {}

controller.getAll = async (req, res, next) => {
    try {
        const inventorys = await InventoryDao.getAll()
        res.json(inventorys)
    } catch (error) {
        next(error)
    }
}
controller.addNew = async (req, res, next) => {
    const data = new Inventory(req.body);
    try {
        res.json(await Inventory.addItem(data));
    } catch (error) {
        next(error);
    }
};
controller.getById = async (req, res, next) => {
    const { id } = req.params
    try {
        const inventorys = await Invetory.getById(id)
        res.json(inventorys)
    } catch (error) {
        next(error)
    }
}
controller.deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
        res.json(await InventoryDao.deleteItem(id));
    } catch (error) {
        next(error);
    }
};
controller.updateById = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        res.json(await InventoryDao.updateItem(id, data));
    } catch (error) {
        next(error);
    }
};
controller.addObject = async (req, res, next) => {
    const { idObject, idInventory } = req.params
    try {
        res.json(await Invetory.addObject(idInventory, idObject))
    } catch (error) {
        next(error)
    }
}

controller.removeObject = async (req, res, next) => {
    const { idObject, idInventory } = req.params
    try {
        res.json(await Invetory.removeObject(idInventory, idObject))
    } catch (error) {
        next(error)
    }
}

controller.equipObject = async (req, res, next) => {
    const { idObject, idInventory } = req.params
    try {
        res.json(await Invetory.removeObject(idInventory, idObject))
    } catch (error) {
        next(error)
    }
}



export { controller as InventoryController }