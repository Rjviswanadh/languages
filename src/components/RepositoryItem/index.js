import './index.css'

const RepositoryItem = props => {
  const {items} = props

  const {
    name,
    issues_count: issuesCount,
    forks_count: forksCount,
    stars_count: starsCount,
    avatar_url: avatarUrl,
  } = items

  return (
    <li className="list-type">
      <img src={avatarUrl} alt={name} className="img" />
      <h1 className="para">{name}</h1>
      <div className="direction">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="star"
        />
        <p>{starsCount}</p>
      </div>
      <div className="direction">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="star"
        />
        <p>{forksCount}</p>
      </div>
      <div className="direction">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="star"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}
export default RepositoryItem
