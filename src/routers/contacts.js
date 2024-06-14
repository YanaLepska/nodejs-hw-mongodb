import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { createContactController, deleteContactController, getAllContactsController, getContactByIdController, patchContactController } from "../controllers/contacts.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactSchema } from "../validation/validateSchema.js";

const router = Router();

 router.get('/contacts', ctrlWrapper(getAllContactsController));

 router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

 router.post('/contacts',validateBody(createContactSchema), ctrlWrapper(createContactController));

 router.patch('/contacts/:contactId',validateBody(updateContactSchema), ctrlWrapper(patchContactController));

 router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;

