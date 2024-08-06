let addnotebtn = document.getElementById("addnote");
let notetext = document.getElementById("notetext");
let date = document.getElementById("day");
let saved = document.getElementById("savednotes");

let createsavednotes, deletebtn, h2date, pinfo;

// Function to save notes to local storage
function saveNotesToLocalStorage(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to get notes from local storage
function getNotesFromLocalStorage() {
    let notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

// Function to render saved notes
function renderSavedNotes() {
    saved.innerHTML = ''; // Clear the container first
    let notes = getNotesFromLocalStorage();

    notes.forEach(note => {
        createsavednotes = document.createElement("div");
        deletebtn = document.createElement("button");
        h2date = document.createElement("h3");
        pinfo = document.createElement("p");

        h2date.innerHTML = note.date;
        pinfo.innerHTML = note.text;
        deletebtn.innerHTML = "Delete";

        createsavednotes.classList.add("lists");
        deletebtn.classList.add("delete");
        h2date.classList.add("savedates");
        pinfo.classList.add("noteinfo");

        createsavednotes.appendChild(deletebtn);
        createsavednotes.appendChild(h2date);
        createsavednotes.appendChild(pinfo);
        saved.appendChild(createsavednotes);

        // Delete note from local storage
        deletebtn.addEventListener("click", function () {
            saved.removeChild(this.parentElement);
            deleteNoteFromLocalStorage(note);
        });
    });
}

// Function to delete a note from local storage
function deleteNoteFromLocalStorage(noteToDelete) {
    let notes = getNotesFromLocalStorage();
    notes = notes.filter(note => note.date !== noteToDelete.date || note.text !== noteToDelete.text);
    saveNotesToLocalStorage(notes);
}

// Add note button event listener
addnotebtn.addEventListener("click", () => {
    if (date.value === "") {
        alert("Enter date!");
    } else if (notetext.value === "") {
        alert("Write a note!");
    } else {
        let note = {
            date: date.value,
            text: notetext.value
        };

        let notes = getNotesFromLocalStorage();
        notes.push(note);
        saveNotesToLocalStorage(notes);

        renderSavedNotes();

        notetext.value = "";
        date.value = "";
    }
});

// Render saved notes on page load
document.addEventListener('DOMContentLoaded', renderSavedNotes);
