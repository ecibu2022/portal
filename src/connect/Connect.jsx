import axios from 'axios';

// http://localhost:9000/api/v1/watoto/users/register

const connect = axios.create({
    baseURL: "http://localhost:9000/api/v1/watoto/users",  
    headers: {
        "Content-Type": "application/json"
    }
})

export const signin = async (email, password) => {
    try {
        const response = await connect.post("/login", {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to signin', error);
    }
}

export const signup = async (formData) => {
    try {
        const response = await connect.post("/register", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to signup, try again', error);
    }
}

