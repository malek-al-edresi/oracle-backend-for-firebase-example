// Import configuration and initialized instances
import { fusabase_app, fusabase_db, fusabase_storage, fusabase_auth } from "./config.js";

// Import our modular functions
import { registerUser, loginUser, logoutUser } from "./auth.js";
import { addNoteToMalek, fetchMalekNotes, renderMalekNotes } from "./db.js";
import { uploadDocument } from "./storage.js";

// UI Elements
const msgDiv = document.getElementById('message');
const authSection = document.getElementById('auth-section');
const appSection = document.getElementById('app-section');
const userEmailSpan = document.getElementById('user-email');

// Input Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const noteInput = document.getElementById('note-text');
const fileInput = document.getElementById('file-upload');
const notesList = document.getElementById('notes-list');
const fileUrlA = document.getElementById('file-url');
const btnLogin = document.getElementById('btn-login');
const btnRegister = document.getElementById('btn-register');

// Button state management
const checkAuthInputs = () => {
  const isFilled = emailInput.value.trim() !== '' && passwordInput.value.trim() !== '';
  btnLogin.disabled = !isFilled;
  btnRegister.disabled = !isFilled;
  
  // Visual feedback for disabled state
  const opacity = isFilled ? '1' : '0.5';
  const cursor = isFilled ? 'pointer' : 'not-allowed';
  btnLogin.style.opacity = opacity;
  btnLogin.style.cursor = cursor;
  btnRegister.style.opacity = opacity;
  btnRegister.style.cursor = cursor;
};

// Listeners for input validation
emailInput.addEventListener('input', checkAuthInputs);
passwordInput.addEventListener('input', checkAuthInputs);

// Initialize button states
checkAuthInputs();

// Helper to show messages
const showMessage = (msg, isError = false) => {
  msgDiv.textContent = msg;
  msgDiv.className = isError ? 'error' : 'success';
  setTimeout(() => {
    msgDiv.className = 'hidden';
  }, 5000);
};

// Update UI based on auth state
const updateUI = (user) => {
  if (user) {
    authSection.classList.add('hidden');
    appSection.classList.remove('hidden');
    userEmailSpan.textContent = user.email || 'User';
    loadNotes();
  } else {
    authSection.classList.remove('hidden');
    appSection.classList.add('hidden');
    notesList.innerHTML = '';
  }
};

// Mock onAuthStateChanged for simplicity if standard observer is not available
// We manually update UI after login/register/logout

// --- Authentication Listeners ---
btnRegister.addEventListener('click', async () => {
  if (btnRegister.disabled) return;
  
  const originalText = btnRegister.textContent;
  btnRegister.textContent = 'Registering...';
  btnRegister.disabled = true;
  btnLogin.disabled = true;
  
  try {
    const user = await registerUser(fusabase_auth, emailInput.value, passwordInput.value);
    showMessage('Registration successful!');
    updateUI(user);
  } catch (error) {
    showMessage(error.message || 'Registration failed', true);
  } finally {
    btnRegister.textContent = originalText;
    checkAuthInputs();
  }
});

btnLogin.addEventListener('click', async () => {
  if (btnLogin.disabled) return;
  
  const originalText = btnLogin.textContent;
  btnLogin.textContent = 'Logging in...';
  btnLogin.disabled = true;
  btnRegister.disabled = true;

  try {
    const user = await loginUser(fusabase_auth, emailInput.value, passwordInput.value);
    showMessage('Login successful!');
    updateUI(user);
  } catch (error) {
    showMessage(error.message || 'Login failed', true);
  } finally {
    btnLogin.textContent = originalText;
    checkAuthInputs();
  }
});

document.getElementById('btn-logout').addEventListener('click', async () => {
  try {
    await logoutUser(fusabase_auth);
    showMessage('Logged out successfully');
    updateUI(null);
  } catch (error) {
    showMessage('Logout failed', true);
  }
});

// --- Database Listeners ---
const loadNotes = async () => {
  try {
    notesList.innerHTML = '<li>Loading...</li>';
    const notes = await fetchMalekNotes(fusabase_db);
    renderMalekNotes(notes, 'notes-list');
  } catch (error) {
    showMessage('Failed to load notes', true);
    notesList.innerHTML = '<li>Error loading notes.</li>';
  }
};

document.getElementById('btn-add-note').addEventListener('click', async () => {
  const text = noteInput.value;
  if (!text) return showMessage('Please enter a note', true);
  
  try {
    await addNoteToMalek(fusabase_db, text);
    showMessage('Note added successfully!');
    noteInput.value = '';
    loadNotes(); // Reload notes
  } catch (error) {
    showMessage('Failed to add note', true);
  }
});

// --- Storage Listeners ---
document.getElementById('btn-upload').addEventListener('click', async () => {
  const file = fileInput.files[0];
  if (!file) return showMessage('Please select a file first', true);

  try {
    const url = await uploadDocument(fusabase_storage, file);
    showMessage('File uploaded successfully!');
    fileUrlA.href = url;
    fileUrlA.textContent = 'View Uploaded File';
    fileUrlA.classList.remove('hidden');
  } catch (error) {
    showMessage('File upload failed', true);
  }
});
