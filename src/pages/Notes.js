import React, { useEffect, useState } from "react";
import { Typography, Paper } from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
import LoadingIcon from "../components/LoadingIcon";
import { db } from "../firebase-config";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, "notes");

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };

    getNotes();
  }, []);

  const deleteHandler = (id) => {
    const noteDoc = doc(db, "notes", id);
    deleteDoc(noteDoc).then(() => {
      toast.error("Nota eliminada!", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  if (isLoading) {
    return (
      <section>
        <LoadingIcon />
      </section>
    );
  }

  //config for masonry library
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Paper
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.068)",
        marginTop: 2,
      }}
    >
      <ToastContainer />
      <Typography
        variant="h3"
        component="h2"
        sx={{ p: 4 }}
        align="center"
        color="primary"
      >
        Notas
      </Typography>

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard
              note={note}
              onDelete={deleteHandler.bind(null, note.id)}
            />
          </div>
        ))}
      </Masonry>
    </Paper>
  );
};

export default Notes;
