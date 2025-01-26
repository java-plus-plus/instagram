import { Card, CardContent, Typography } from "@mui/material"
import Post from "../types/Post"

const PostCard = (props: {post: Post}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="body1">{props.post.title}</Typography>
                <Typography variant="body2">{props.post.body}</Typography>
            </CardContent>
        </Card>
    )
}

export default PostCard