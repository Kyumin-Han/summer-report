import React from 'react'
import { Link } from 'react-router-dom'

const Index = ({ posts }) => {
  return (
    <div>
      <Link to="/writepost">글 쓰기</Link>
      <div>
        <table>
          <th colSpan={4}>글 목록</th>

          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.writer}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default Index
