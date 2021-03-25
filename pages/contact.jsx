import { Fragment } from 'react';
import Head from 'next/head';
import ContactForm from '../components/Contact/ContactForm';

function ContactPage (){
	return (
		<Fragment>
			<Head>
				<title>Contact Page</title>
				<meta name='description' content='Get in touch with me!' />
			</Head>
			<ContactForm />
		</Fragment>
	);
}

export default ContactPage;
