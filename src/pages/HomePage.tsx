import { useEffect, useState } from "react";
import todoService from "../services/todoService";
import { Grid2 as Grid, Container } from "@mui/material";
import PostCard from "../components/PostCard";
import Post from "../types/Post";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    todoService.getTodos().then((res: { data: Post[] }) => {
      setPosts(res.data);
    })
  }, [])


  return (
    <Container>
      <Grid container spacing={3}>
        {posts.map((post) => {
          return (
            <Grid size={{ sm: 12, md: 6, lg: 4 }} key={post.id}>
              <PostCard post={post} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default HomePage