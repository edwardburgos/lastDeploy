import dotenv from 'dotenv';

dotenv.config();

const config = {
	db_url: process.env.DATABASE_URL,
	port: process.env.PORT,
	secret: process.env.SECRET,
	session_secret: process.env.SESSION_SECRET,
	privateApiKey: process.env.STRIPE_PRIVATE_API_KEY,
	gmail_user: process.env.GMAIL_USER,
	gmail_password: process.env.GMAIL_PASSWORD,
};

export default config;
