import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  
} from "@mui/material";
import "../components/Book/book.css"
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "", 
    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="addbook"
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={5}

        padding={"5px"}
      >
        <FormLabel style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "purple",
          fontWeight: "600"
        }}>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          className="input"

          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "purple",
          fontWeight: "600"
        }}
        >Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          className="input"

          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "purple",
          fontWeight: "600"
        }}
        >Description</FormLabel>
        <TextField
  
          value={inputs.description}
          onChange={handleChange}
          className="input"

          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "purple",
          fontWeight: "600"
        }}
        >Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          className="input"

          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "purple",
          fontWeight: "600"
        }}
        >Image</FormLabel>
        <TextField
          className="input"
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.2rem",
          color: "purple",
          fontWeight: "600"
        }}
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }

          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;