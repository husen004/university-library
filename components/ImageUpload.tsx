'use client'

import {
  IKImage,
  ImageKitProvider,
  IKUpload,
} from "imagekitio-next";
import config from "@/lib/config";

const authentocator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)

    if(!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      )
    }

  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.massage}`)
  }
}

const ImageUpload = () => {
  return <div>ImageUpload</div>;
};

export default ImageUpload;
