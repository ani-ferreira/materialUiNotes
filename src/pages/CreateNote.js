import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from "@mui/material";
import BackupIcon from "@mui/icons-material/Backup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateNote = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Trabajo");

  //errors state for input fields
  const [titleError, setTitleError] = useState(false);
  const [textError, setTextError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setTitleError(true);
    }
    if (text.trim().length === 0) {
      setTextError(true);
    }

    if (title.trim().length > 0 && text.trim().length > 0) {
      const note = {
        title: title,
        text: text,
        category: category,
      };

      setTitleError(false);
      setTextError(false);

      const notesCollectionRef = collection(db, "notes");

      addDoc(notesCollectionRef, {
        title: note.title,
        body: note.text,
        category: note.category,
      }).then(() => {
        toast.success("Nota guardada!", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        navigate("/notes");
      });
    }
  };

  return (
    <Container
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.068)", p: 4, marginTop: 5 }}
    >
      {" "}
      <Typography
        variant="h3"
        sx={{ p: 3 }}
        component="h2"
        align="center"
        color="primary"
      >
        Crear una nota
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "block",
          }}
          label="Título"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          type="text"
          error={titleError}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "block",
          }}
          label="Texto"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          type="text"
          rows="4"
          error={textError}
          onChange={(e) => setText(e.target.value)}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend" color="secondary">
            Categoria
          </FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="row-radio-buttons-group"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="Trabajo"
              control={<Radio color="secondary" />}
              label="Trabajo"
            />
            <FormControlLabel
              value="Casa"
              control={<Radio color="secondary" />}
              label="Casa"
            />
            <FormControlLabel
              value="Otro"
              control={<Radio color="secondary" />}
              label="Otro"
            />
          </RadioGroup>
        </FormControl>
        <br /> <br />
        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          align="center"
          endIcon={<BackupIcon />}
        >
          subir
        </Button>
      </form>
    </Container>
  );
};

export default CreateNote;
