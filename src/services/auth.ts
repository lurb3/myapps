// services/auth.js
import request from "@/services/axios.interceptors";
import router from "@/router";

class AuthService {
  isAuthenticated() {
    return localStorage.getItem("token") != null;
  }
  async login(email: string, password: string) {
    try {
      await request.get("/sanctum/csrf-cookie");
      const response = await request.post("/api/v1/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      router.push("/expenses");
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

  async logout() {
    await request.post("/api/v1/logout");
    localStorage.removeItem("token");
    router.push("/login");
  }
}

export default new AuthService();
