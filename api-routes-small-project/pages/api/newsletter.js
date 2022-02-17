function handler(request, response) {
  if (request.method === 'POST') {
    const userEmail = request.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      response.status(422).json({ message: 'Invalid e-mail adress.' });
      return;
    }

    response.status(201).json({ message: 'Signed Up' });
  }
}

export default handler;
