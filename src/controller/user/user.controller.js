import { User } from "../../models/NPCs/npc.models.js"
import { UserDao } from "../../app.js"

const controller = {}

controller.getAll = async (req, res, next) => {
    try {
        const npcs = await NPCsDao.getAll()
        res.json(npcs)
    } catch (error) {
        next(error)
    }
}
controller.addNew = async (req, res, next) => {
    const data = new NPCs(req.body);
    try {
        res.json(await NPCsDao.addItem(data));
    } catch (error) {
        next(error);
    }
};
controller.getById = async (req, res, next) => {
    const { id } = req.params
    try {
        const npc = await NPCsDao.getById(id)
        res.json(npc)
    } catch (error) {
        next(error)
    }
}
controller.deleteById = async (req, res, next) => {
    const id = req.params.id;
    try {
        res.json(await NPCsDao.deleteItem(id));
    } catch (error) {
        next(error);
    }
};
controller.updateById = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    try {
        res.json(await NPCsDao.updateItem(id, data));
    } catch (error) {
        next(error);
    }
};

export { controller as npcController }