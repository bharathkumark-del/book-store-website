import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField
} from '@mui/material'
import axios from 'axios'
import { Box } from '@mui/system'
import React, { useEffect , useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../Book/book.css"

const BookDetail = () => {
    const [inputs, setInputs] = useState({})
    const id = useParams().id
    const [checked,setChecked]=useState(false)
    const history = useNavigate()
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/books/${id}`)
            .then(res => res.data).then(data=>setInputs(data.book)
            )
        }
        fetchHandler()
    }, [id])
    const sendRequest= async()=>{
        await axios.put(`http://localhost:5000/books/${id}`,{
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked),
        }).then(res=>res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history("/books"))
    }
    const handleChange=(e)=>{
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
    }
    return (
        <div>
           {inputs && <form onSubmit={handleSubmit}>
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
                        Update Book
                    </Button>
                </Box>
            </form>}
        </div>
    )
}

export default BookDetail