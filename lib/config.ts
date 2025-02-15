const config = {
    env: {
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGE_KEY,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        }
    }
}