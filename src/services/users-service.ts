"use client";
import axios from "axios";
import https from "https";

export const usersService: any = {
  async fetchUsers(currentPage: number, recordsPerPage: number) {
    const httpAgent = new https.Agent({ rejectUnauthorized: false }); // Ignore SSL certificate validation (use with caution)

    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
      {
        httpsAgent: httpAgent,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        params: {
          page: currentPage,
          limit: recordsPerPage,
        },
      }
    );
    return response?.data ?? [];
  },
  async addUser(user: any) {
    const httpAgent = new https.Agent({ rejectUnauthorized: false }); // Ignore SSL certificate validation (use with caution)

    const jwtToken = localStorage.getItem("licenseToken");
    const user_data = user?.values;
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
      {
        user_name: user_data.user_name,
        email: user_data.email,
        password: user_data.password,
        confirmed_password: user_data.confirmed_password,
      },
      {
        httpsAgent: httpAgent,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  },
  async editUser(user: any) {
    const httpAgent = new https.Agent({ rejectUnauthorized: false }); // Ignore SSL certificate validation (use with caution)

    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${user?.id}`,
      {
        user_name: user.user_name,
        email: user.email,
        password: user.password === "" ? undefined : user.password,
        confirmed_password:
          user.confirmed_password === "" ? undefined : user.confirmed_password,
      },
      {
        httpsAgent: httpAgent,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  },
  async deleteUser(userId: any) {
    const httpAgent = new https.Agent({ rejectUnauthorized: false }); // Ignore SSL certificate validation (use with caution)

    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}`,
      {
        httpsAgent: httpAgent,
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  },
};
