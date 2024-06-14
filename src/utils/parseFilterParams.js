export const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isTypeContact = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);
  if (isTypeContact(contactType)) return contactType;
};

export const parseBoolean = (isFavourite) => {
  const isFavouriteContact = ['true', 'false'].includes(isFavourite);
   if (!isFavouriteContact) return;
   return isFavourite === 'true' ? true : false;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;
  const parsedType = parseContactType(contactType);
  const parsedBoolean = parseBoolean(isFavourite);
  return {
    contactType: parsedType,
    isFavourite: parsedBoolean,
  };
};
