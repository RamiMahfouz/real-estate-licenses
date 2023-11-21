import axios from "axios";

interface UseLoginParams {
  email: string;
  password: string;
}

export async function loginService(params: UseLoginParams) {
  const { email, password } = params;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`,
    {
      email: email,
      password: password,
    }
  );
  return response
}
