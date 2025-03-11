import dummyBooks from "../dummybooks.json"

const uploadToImageKit = (url: string, fileName: string, folder: string) => {
    
}

const seed = async () => {
  console.log("Seeding data...");

  try {
    for (const book of dummyBooks) {
        const coverUrl = await uploadToImageKit(
          book.coverUrl,
          `${book.title}`,
          "/books/covers"
        );
      }
  } catch (error) {
    console.error("Error seeding data", error)
  }
};
