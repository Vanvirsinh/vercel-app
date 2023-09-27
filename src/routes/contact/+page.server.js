import { contacts } from '$db/contact';

/** @type {import('./$types').PageServerLoad} */

export const actions = {
    createContact: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const res = await contacts.insertOne({
            name,
            email,
            phone,
            subject,
            message
        })
        try {
            return {
                success: true,
                message: `Thank you ${name} for your submission!`
            }
        } catch {
            return {
                success: false,
                message: `Something went wrong while submitting your form!`
            }
        }

    }
};