// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(request, response) {
  if (request.method === 'POST') {
    const { email, name, message } = request.body;

    if (
      !email ||
      !name ||
      !message ||
      !email.includes('@') ||
      name.trim() === '' ||
      message.trim() === ''
    ) {
      response.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = { email, name, message };
    response.status(201).json({ message: 'Successfully Sent !', message: newMessage });
  }
}
