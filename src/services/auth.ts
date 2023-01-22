// services/auth.js
import request from "@/services/axios.interceptors";

class AuthService {
  isAuthenticated() {
    return localStorage.getItem("token") != null;
  }
  async login(email: string, password: string) {
    console.log(request.defaults.withCredentials);
    try {
      await request.get("/sanctum/csrf-cookie");
      const response = await request.post("/api/v1/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      return true;
    } catch (error) {
      return false;
    }
  }

  async signup(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) {
    try {
      await request.post("/api/v1/signup", {
        name,
        email,
        password,
        password_confirmation,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("token");
  }
}

export default new AuthService();
