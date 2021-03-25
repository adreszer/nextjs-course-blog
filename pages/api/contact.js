import { connectDb, Contact } from '../../models';

async function handler (req, res){
	if (req.method === 'POST') {
		const { email, name, message } = req.body;
		if ((!email || !email.includes('@') || !name || name.trim() === '', !message || message.trim() === '')) {
			res.status(422).json({ message: 'The data you inserted is invalid.' });
			return;
		}
		try {
			await connectDb();
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: 'There was an error connecting to the database.' });
			return;
		}

		try {
			const contact = await new Contact({ email, name, message }).save();
			res.status(200).json({ message: 'The message was successfully submitted.', contact });
		} catch (error) {
			console.log(error);
			res.status(422).json({ message: 'The data you inserted is invalid.' });
		}
	}
}

export default handler;
