
import axios from "axios";

export async function generateRoomDesign(
  imageFile: File,
  style: string
) {
  const formData = new FormData();

  formData.append("image_file", imageFile);

  try {
    const response = await axios.post(
      "https://clipdrop-api.co/reimagine/v1/reimagine",
      formData,
      {
        responseType: "blob",

        headers: {
          "x-api-key":
            "YOUR_API_KEY_HERE",
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

