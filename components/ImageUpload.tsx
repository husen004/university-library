"use client";

import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import ImageKit from "imagekit";
import { useRef, useState } from "react";
import Image from "next/image";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authentocator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();

    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.massage}`);
  }
};

const ImageUpload = () => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = () => {};
  const onSuccess = () => {};

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authentocator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />
      <button className="upload-btn">
        <Image
        src={`/icons/upload.svg`}
        alt="upload-icon"
        width={20}
        height={20}
        className="object-contain"
        />

        <p className="text-base text-light-100">Upload a File</p>

        {file && <p className="upload-filename">{file.filePath}</p>}

        {file && (
          <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
          />
        )}
      </button>
    </ImageKitProvider>
  );
};

export default ImageUpload;
