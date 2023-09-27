import db from '$db/mongo';

export const contacts = db.collection('contacts');
export const enquiry = db.collection('enquiry');