const baseUrl = process.env.NODE_ENV === "production" 
? 'https://edemy-react.example.com' 
: 'http://localhost:3000';

export default baseUrl;