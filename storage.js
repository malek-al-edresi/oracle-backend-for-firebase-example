// Assuming standard Firebase-like API interface provided by Fusabase
import { ref, uploadBytes, getDownloadURL } from "fusabase/storage";

/**
 * Uploads a file to the configured Storage bucket (DBFS) and returns its URL.
 * @param {Object} storageInstance - The initialized Fusabase storage instance.
 * @param {File} file - The file object from a file input.
 * @returns {Promise<string>} The public/downloadable URL of the file.
 */
export const uploadDocument = async (storageInstance, file) => {
  // Create a storage reference
  const storageRef = ref(storageInstance, `documents/${Date.now()}_${file.name}`);
  
  // Upload the file
  await uploadBytes(storageRef, file);
  
  // Retrieve and return the download URL
  const url = await getDownloadURL(storageRef);
  return url;
};
