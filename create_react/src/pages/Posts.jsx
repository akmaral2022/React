import React, { useEffect, useRef, useState } from "react";
import { PostList } from "../components/PostList";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter"
import { MyModal } from "../components/MyModal/MyModal";
import { MyButton } from "../components/UI/button/MyButton";
import { usePosts } from "../components/hooks/usePosts";
import { PostService } from "../API/PostService";
import { Louder } from "../components/UI/louder/Louder";
import { useFetching } from "../components/hooks/useFetching";
import { getPageCount, getPagesArray } from "../components/utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination"
import { useObserver } from "../components/hooks/useObserver";
import { MySelect } from "../components/UI/select/MySelect";


export function Posts() {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElemnt = useRef()

    const [fetchPost, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })


    useObserver(lastElemnt, page < totalPages, isPostLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPost(limit, page)
    }, [page, limit])


    //СОЗДАТЬ НОВЫЙ ПОСТ
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }



    //УДАЛИТЬ ПОСТ
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="Post">

            <MyButton style={{ marginTop: 30, background: 'teal' }} onClick={() => { setModal(true) }}>
                Создать новый пост
            </MyButton>
            <MyModal visible={modal}
                setVisible={setModal}>

                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <MySelect
                value={limit}
                onChange={(value) => setLimit(value)}
                defaultValue="Количество элементов на странице"
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 15, name: '15' },
                    { value: -1, name: 'Показать всё' },


                ]}
            />
            {postError &&
                <h1>Произошла ошбика ${postError}</h1>
            }
            <PostList remove={removePost} posts={searchedAndSortedPosts} title='Список JS' />
            <div ref={lastElemnt} style={{ height: 20, background: 'grey' }} />
            {isPostLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Louder /></div>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />


        </div>
    );
}

export default Posts;
