import MyButton from "./UI/button/MyButton"
import { MyInput } from "./UI/input/MyInput"
import { useState } from "react"

export const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text" placeholder="Введите название поста" />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text" placeholder="Введите описание поста" />


            <MyButton style={{ background: 'teal' }} onClick={addNewPost}>Добавить пост</MyButton>
        </form>
    )
}