import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY = "sk_test_51OyB5mSAzKN1RgjbQyL7qPNuYbsFKyCSPxrzrbxwcyvA2fel7rw0M83CNC3ZvFe6EY5hT41ESfyTgx45GwWrfnwA00Fulon0rL"

export default{
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD,
    STRIPE_SECRET_KEY
};
