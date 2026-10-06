import { useParams } from "react-router"
const ProfilePage = ({favorite, setFavorite}) => {
  const {user} = useParams()
  const findUser = favorite.find((index) => {
    return index.name == user
  })
  return (
    <div>
        <img src={findUser.avatar_url}/>
        <h1>{findUser.bio}</h1>
    </div>
  )
}

export default ProfilePage