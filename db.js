import { collection, addDoc, getDocs } from "fusabase/oracledb";

const COLLECTION_NAME = "malek";

export const addNoteToMalek = async (dbInstance, text) => {
  try {
    const docData = {
      text: text,
      created_at: new Date().toISOString()
    };
    
    console.log(`[DB] Adding document to '${COLLECTION_NAME}' collection...`, docData);
    
    const docRef = await addDoc(collection(dbInstance, COLLECTION_NAME), docData);
    console.log(`[DB] Success! Document written with ID:`, docRef.id);
    
    return docRef.id;
  } catch (error) {
    console.error(`[DB] Error adding document to '${COLLECTION_NAME}':`, error);
    throw error;
  }
};

export const fetchMalekNotes = async (dbInstance) => {
  try {
    console.log(`[DB] Fetching documents from '${COLLECTION_NAME}' collection...`);
    
    const querySnapshot = await getDocs(collection(dbInstance, COLLECTION_NAME));
    const notes = [];
    
    querySnapshot.forEach((doc) => {
      notes.push({ id: doc.id, ...doc.data() });
    });
    
    console.log(`[DB] Successfully fetched ${notes.length} documents.`);
    return notes;
  } catch (error) {
    console.error(`[DB] Error fetching documents from '${COLLECTION_NAME}':`, error);
    throw error;
  }
};

export const renderMalekNotes = (notes, listElementId) => {
  try {
    const ul = document.getElementById(listElementId);
    if (!ul) {
      console.error(`[UI] List element with id '${listElementId}' not found.`);
      return;
    }

    ul.innerHTML = "";
    
    if (notes.length === 0) {
      ul.innerHTML = "<li>No notes found in collection.</li>";
      return;
    }

    notes.forEach(note => {
      const li = document.createElement("li");
      const dateStr = note.created_at ? new Date(note.created_at).toLocaleString() : 'Unknown Date';
      li.textContent = `${note.text} (Created: ${dateStr})`;
      ul.appendChild(li);
    });
    
    console.log(`[UI] Rendered ${notes.length} notes to the DOM.`);
  } catch (error) {
    console.error(`[UI] Error rendering notes:`, error);
  }
};
