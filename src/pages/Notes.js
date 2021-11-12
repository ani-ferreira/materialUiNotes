import React, { useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";
import NoteCard from "./components/NoteCard";
import Masonry from "react-masonry-css";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-notes-47db9-default-rtdb.firebaseio.com/notes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const notesData = [];

        for (const key in data) {
          const noteData = {
            id: key,
            ...data[key],
          };
          notesData.push(noteData);
        }
        setIsLoading(false);
        setNotes(notesData);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Typography
        variant="h3"
        component="h2"
        sx={{ p: 3 }}
        align="center"
        color="secondary"
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
            <NoteCard note={note} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
