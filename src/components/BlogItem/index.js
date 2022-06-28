// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-item">
      <div className="blog-header">
        <h1 className="blog-title">{title}</h1>
        <p className="date-time">{publishedDate}</p>
      </div>
      <p className="blog-info">{description}</p>
    </li>
  )
}

export default BlogItem
