"use client";

import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import ImageKit from "imagekit";
import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { text } from "stream/consumers";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authentocator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/imagekit`);

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
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: string;
  onFileChange: (filePath: string) => void;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
}: Props) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const [progress, setProgress] = useState(0);

  const style = {
    button: variant === "dark" ? "bg-dark-300" : "bg-light-600",
    placeholder: variant === "dark" ? "text-light-100" : "text-slate-100",
    text: variant === "dark" ? "text-light-100" : "text-dark-400",
  }

  const onError = (error: any) => {
    console.log(error);
    toast({
      title: `${type} uploaded failed`,
      description: `Your ${type} could not be uploaded. Please try again`,
      variant: "destructive",
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: `${type} uploaded successfully`,
      description: `${res.filePath} Uploaded successfully`,
      variant: "default"
    });
  };

  const onValidate = (file: File) => {
    if(type === "image"){
      if(file.size > 20 * 1024 * 1024){
        toast({
          title: `File is too large`,
          description: `Please upload file that is less than 20MB`,
          variant: "destructive",
        });

        return false;
      }
    } else if(type === "video"){
      if(file.size > 50 * 1024 * 1024){
        toast({
          title: `File is too large`,
          description: `Please upload video that is less than 50MB`,
          variant: "destructive",
        });

        return false;
      }
      
    }
  }

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
      <button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src={`/icons/upload.svg`}
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />

        <p className="text-base text-light-100">Upload a File</p>

        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
};

export default FileUpload;
