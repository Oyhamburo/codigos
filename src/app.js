import { ObjectsDaoMongoDB, NPCsDaoMongoDB, InvetoryDaoMongoDB, UserDaoMongoDB } from "./daos/index.dao.js"

const NPCsDao = new NPCsDaoMongoDB()
const ObjectsDao = new ObjectsDaoMongoDB()
const InventoryDao = new InvetoryDaoMongoDB()
const UserDao = new UserDaoMongoDB()

export { NPCsDao, ObjectsDao, UserDao, InventoryDao }