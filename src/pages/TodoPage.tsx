import { useState } from "react"
import Todo from "../types/Todo"
import { Button, Card, CardActions, CardContent, Container, Grid2 as Grid, IconButton, TextField, Typography } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { v4 as uuidv4 } from 'uuid';

const TodoPage = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const [formData, setFormData] = useState<Todo>({
        id: '',
        title: '',
        body: '',
    })

    return (
        <Container>
            <br />
            <br />
            <form onSubmit={(event) => {
                event.preventDefault();
                setTodos((currentTodos) => {
                    return [...currentTodos, { ...formData, id: uuidv4() }]
                });
                setFormData({
                    id: '',
                    title: '',
                    body: ''
                })
            }}>
                <Grid container spacing={3}>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <TextField
                            type="text"
                            label="Title"
                            variant="outlined"
                            onChange={(event) => {
                                setFormData((formData) => {
                                    return {
                                        ...formData,
                                        title: event.target.value
                                    }
                                })
                            }}
                            value={formData.title}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <TextField
                            type="text"
                            label="Body"
                            variant="outlined"
                            onChange={(event) => {
                                setFormData((formData) => {
                                    return {
                                        ...formData,
                                        body: event.target.value
                                    }
                                })
                            }}
                            value={formData.body}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <Button
                            type="submit"
                            variant="contained"
                        >Create</Button>
                    </Grid>
                </Grid>
            </form>
            <br />
            {JSON.stringify(formData)}
            <br />
            <Grid container spacing={3}>
                {todos.map(todo => {
                    return (
                        <Grid size={{ sm: 12, md: 6, lg: 4 }} key={todo.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1">{todo.title}</Typography>
                                    <Typography variant="body2">{todo.body}</Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton sx={{ marginLeft: 'auto' }} onClick={() => {
                                        // setTodos((currentTodos) => {
                                        //     return currentTodos.filter((_todo) => {
                                        //         return _todo.id !== todo.id;
                                        //     })
                                        // })
                                        setTodos(todos => todos.filter(_todo => _todo.id !== todo.id))
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default TodoPage