import React, { useState } from 'react'

const WritePost = ({ addPost }) => {
  const [title, setTitle] = useState('')
  const [writer, setWriter] = useState('')
  const [contents, setContents] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    if (!writer) {
      setWriter('익명')
      return
    }

    addPost({ title, writer, contents })

    setTitle('')
    setWriter('')
    setContents('')
    window.location.href = 'http://localhost:3000/'
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>제목</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>작성자</label>
        <input
          type="text"
          placeholder="작성자를 입력하세요"
          value={writer}
          onChange={e => setWriter(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <textarea
          placeholder="본문을 입력하세요"
          rows={8}
          value={contents}
          onChange={e => setContents(e.target.value)}
        />
      </div>

      <input type="submit" value="게시하기" className="btn btn-block" />
    </form>
  )
}

export default WritePost
