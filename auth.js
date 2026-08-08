// Assuming standard Firebase-like API interface provided by Fusabase
// If the methods differ, adjust imports accordingly.
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "fusabase/auth";

/**
 * Registers a new user with email and password.
 * @param {Object} authInstance - The initialized Fusabase auth instance.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Promise<Object>} The created user object.
 */
export const registerUser = async (authInstance, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
  return userCredential.user;
};

/**
 * Logs in an existing user.
 * @param {Object} authInstance - The initialized Fusabase auth instance.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Promise<Object>} The authenticated user object.
 */
export const loginUser = async (authInstance, email, password) => {
  const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
  return userCredential.user;
};

/**
 * Logs out the current user.
 * @param {Object} authInstance - The initialized Fusabase auth instance.
 * @returns {Promise<void>}
 */
export const logoutUser = async (authInstance) => {
  await signOut(authInstance);
};
