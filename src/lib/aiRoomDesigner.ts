
import axios from "axios";

export async function generateRoomDesign(
  imageFile: File,
  style: string
) {
  const formData = new FormData();

  formData.append("image_file", imageFile);

  const apiKey = import.meta.env.VITE_CLIPDROP_API_KEY;

  if (!apiKey) {
    throw new Error("Clipdrop API key is not configured");
  }

  try {
    const response = await axios.post(
      "https://clipdrop-api.co/reimagine/v1/reimagine",
      formData,
      {
        responseType: "blob",

        headers: {
          "x-api-key": apiKey,
        },

        params: {
          prompt: `Luxury ${style} interior design, ultra realistic, modern furniture, premium lighting`,
        },
      }
    );

    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error(error);

    throw error;
  }
}

