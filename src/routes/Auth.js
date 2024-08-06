import {  decodeToken } from "react-jwt";
import axios from 'axios'; // Import axios
import Cookies from 'js-cookie'; // Import Cookies object

export class AuthService {
    
    async Signup({ username, email, password }) {
        try {
            const userAccount = await axios.post("/api/signup", { username, email, password });
            console.log(userAccount);
            if (userAccount) {
                return this.login({ email, password }); // Use 'this' to call the login method
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const res = await axios.post("/api/login", { email, password });
            console.log(res);
            return res;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
 async getCurrentUser() {
        try {
            const token = Cookies.get('token');
            console.log(token);
            const myDecodedToken = decodeToken(token);
            console.log(myDecodedToken)
            if (!myDecodedToken) {
            return null; // No token found
            }
          // Check if token is expired (optional)
          return myDecodedToken;
        } catch (error) {
          console.log("getCurrentUser :: error", error);
          return null;
        }
      }
    async getToken() {
        try {
            const Token = Cookies.get('token');
            
            if (!Token) {
            return null; // No token found
            }
          // Check if token is expired (optional)
          return Token;
        } catch (error) {
          console.log("getCurrentUser :: error", error);
          return null;
        }
    }
      

    async logout() {
        try {
            const res = await axios.get("/api/logout");
            return res;
        } catch (error) {
            console.log("logout :: error", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
