import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  patchContact,
} from '../services/contacts.js';
import mongoose from 'mongoose';
import createHttpError from 'http-errors';

export const getAllContactsController = async (req, res) => {
  const contacts = await getAllContacts();
  // throw new Error('Сheck your internet connection');
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  if (!mongoose.isValidObjectId(contactId)) {
    return res.status(400).json({
      status: 400,
      message: 'Id is invalid',
    });
  }
  const contact = await getContactById(contactId);

  if (!contact) {
    next(createHttpError(404, `The contact ${contactId} was not found.`));
    return;
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const newContact = await createContact(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: newContact,
  });
};

export const patchContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await patchContact(contactId, req.body);
    if (!contact) {
        next(createHttpError(404, 'Contact not found'));
        return;
  }

  res.status(200).json({
        status: 200,
        message: 'Successfully patched a contact!',
        data: contact,
    });
};


export const deleteContactController = async (req, res, next) => {
    const { contactId } = req.params;
  const contact = await deleteContact(contactId);
    if (!contact) {
        next(createHttpError(404, 'Contact not found'));
        return;
    }
    res.status(204).send();
};
