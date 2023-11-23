"use client";
import axios from "axios";

export const usersService: any = {
  async fetchUsers(currentPage: number, recordsPerPage: number) {
    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
      {
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
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  },
  async editUser(user: any) {
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
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  },
  async deleteUser(userId: any) {
    const jwtToken = localStorage.getItem("licenseToken");
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  },
};
