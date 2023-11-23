import axios from "axios";
import https from "https";
interface UseLoginParams {
  email: string;
  password: string;
}

export async function loginService(params: UseLoginParams) {
  const { email, password } = params;
  const httpAgent = new https.Agent({ rejectUnauthorized: false }); // Ignore SSL certificate validation (use with caution)
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`,
    {
      email: email,
      password: password,
    },
    {
      httpsAgent: httpAgent,
    }
  );
  return response;
}
