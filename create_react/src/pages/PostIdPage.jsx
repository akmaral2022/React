import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useFetching } from "../components/hooks/useFetching";
import { PostService } from "../API/PostService";
import { Louder } from "../components/UI/louder/Louder";

export const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComment] = useState([])
    const [fetchPostById, isLoadin, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, ComError] = useFetching(async (id) => {
        const response = await PostService.getCommentByPostId(id)
        setComment(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoadin
                ? <Louder />
                : <div>{post.id}. {post.title}</div>}
            <h1>Комментарии</h1>
            {isComLoading
                ? <Louder />
                : <div>
                    {comments.map(comment =>
                        <div key={comment.key} style={{ marginTop: 17 }}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>)}
                </div>}
        </div>
    )
}