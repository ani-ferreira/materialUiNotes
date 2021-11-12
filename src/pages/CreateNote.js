import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import BackupIcon from "@mui/icons-material/Backup";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
      fetch(
        "https://react-notes-47db9-default-rtdb.firebaseio.com/notes.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: { "Content-Type": "application/json" },
        }
      ).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ p: 3 }}
        component="h2"
        align="center"
        color="secondary"
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
