'use client'

import {
  IKImage,
  ImageKitProvider,
  IKUpload,
} from "imagekitio-next";
import config from "@/lib/config";
import ImageKit from "imagekit";
import { useRef, useState } from "react";

const {
  env: {
      imagekit: { publicKey, urlEndpoint },
  },
} = config;


const authentocator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`)

    if(!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      )
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { signature, expire, token };

  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.massage}`)
  }
}

const ImageUpload = () => {

  const ikUploadRef = useRef(null)
  const [file, setFile] = useState<{ filePath: string } | null>(null)

  const onError = () => {

  }
  const onSuccess = () => {
    
  }

  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authentocator}>
      <IKUpload className="hidden" ref={ikUploadRef} onError={onError} onSuccess={onSuccess} />
    </ImageKitProvider> 
  )
};

export default ImageUpload;
