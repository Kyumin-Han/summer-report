import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({ deletePost, getPost, post }) => {
  const { postId } = useParams()

  useEffect(() => {
    getPost(postId)
  }, [])

  return (
    <div>
      Post 상세 페이지<p>{post.title}</p>
      <button onClick={() => deletePost(post.id)}>삭제</button>
      <button>
        <Link to={`/updatepost/${post.id}`}>수정</Link>
      </button>
    </div>
  )
}

export default Post
