export const sendEmail = (subject, body) => {
    Email.send({
        SecureToken: "657d86d2-f4ff-440b-ac4b-0ab91638ec7d",
        To: 'deoravanvirsinh7773@gmail.com',
        From: "deoravanvirsinh7773@gmail.com",
        Subject: subject,
        Body: body
    })
}