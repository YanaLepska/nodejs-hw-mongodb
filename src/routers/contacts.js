import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { createContactController, deleteContactController, getAllContactsController, getContactByIdController, patchContactController } from "../controllers/contacts.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactSchema } from "../validation/validateSchema.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = Router();

router.use(authenticate);

 router.get('/', ctrlWrapper(getAllContactsController));

 router.get('/:contactId', ctrlWrapper(getContactByIdController));

 router.post('',validateBody(createContactSchema), ctrlWrapper(createContactController));

 router.patch('/:contactId',validateBody(updateContactSchema), ctrlWrapper(patchContactController));

 router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;


