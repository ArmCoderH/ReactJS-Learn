const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL || 'https://cloud.appwrite.io/v1'),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID || '6792b2ed0002dca11066'),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID || '6792b38a001dd1f7f2e0'),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID || '6792b3ab0012a36f7fd1'),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID || '6792b5070038511ac196'),
  };
  
  
  console.log('Configuration:', conf); // Debugging output
  
  export default conf;
  