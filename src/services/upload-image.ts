import useStore from "@/store/store";
import axios from "axios";
interface UploadImageParams {
  File: any;
  key: string;
}

export async function UploadImage(params: UploadImageParams) {
  const { File, key } = params;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/images/${key}`,
    {
      image: File,
    },
    {
      headers: {
        accept: "*/*",
        "Content-Type": "multipart/form-data",
        "Cache-Control": "no-cache",
      },
    }
  );

  return response;
}
