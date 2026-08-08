import { initializeApp } from "fusabase/app";
import { getOracledb } from "fusabase/oracledb";
import { getStorage } from "fusabase/storage";
import { getAuth } from "fusabase/auth";

// Initialize using Vite environment variables or fallback placeholders
const fusabaseConfig = {
  schema: import.meta.env.VITE_FUSABASE_SCHEMA || "YOUR_SCHEMA",
  app_name: import.meta.env.VITE_FUSABASE_APP_NAME || "YOUR_APP_NAME",
  app_type: "WEB",
  app_id: import.meta.env.VITE_FUSABASE_APP_ID || "YOUR_APP_ID",
  objs_type: "dbfs",
  project_id: import.meta.env.VITE_FUSABASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storage_bucket: import.meta.env.VITE_FUSABASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  auth_type: "base",
  auth_id: import.meta.env.VITE_FUSABASE_AUTH_ID || "YOUR_AUTH_ID",
  ords_host: import.meta.env.VITE_FUSABASE_ORDS_HOST || "http://localhost:3000/ords/your_schema/"
};

// Initialize app
export const fusabase_app = initializeApp(fusabaseConfig);

// Get instances
export const fusabase_db = getOracledb(fusabase_app);
export const fusabase_storage = getStorage(fusabase_app);
export const fusabase_auth = getAuth(fusabase_app);
