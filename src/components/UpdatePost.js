import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdatePost = ({ getPost, post, updatePosts }) => {
  const { postId } = useParams()
  const [title, setTitle] = useState(post.title)
  const [writer, setWriter] = useState(post.writer)
  const [contents, setContents] = useState(post.contents)

  useEffect(() => {
    getPost(postId)
  }, [])

  const onSubmit = e => {
    e.preventDefault()

    updatePosts(postId, { title, writer, contents })
    window.location.href = `http://localhost:3000/post/${postId}`
  }
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>작성자</label>
          <input
            type="text"
            value={writer}
            onChange={e => setWriter(e.target.value)}
          />
        </div>

        <div className="form-control form-control-check">
          <textarea
            rows={8}
            value={contents}
            onChange={e => setContents(e.target.value)}
          />
        </div>

        <input type="submit" value="게시하기" className="btn btn-block" />
      </form>
    </div>
  )
}

export default UpdatePost
