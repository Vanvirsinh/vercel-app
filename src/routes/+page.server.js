import { enquiry } from '$db/contact';

/** @type {import('./$types').PageServerLoad} */

export const actions = {
    createEnquiry: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');

        const res = await enquiry.insertOne({
            name,
            email,
            phone,
            service,
            message
        })
        try {
            return {
                success: true,
                message: `You raised an enquiry for ${service} service successfully!`
            }
        } catch {
            return {
                success: false,
                message: `Something went wrong while submitting your form!`
            }
        }

    }
};