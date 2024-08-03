
import { formatDistanceToNow} from 'date-fns'
import {
   VideoItemList,
   Thumbnail, 
   Container,
   Title,
   Para,
   ProductDetails,
   RatingContainer,
   View,
   Profile,
   DetailsContainer,
  } from './styledComponents'
import { Link } from 'react-router-dom'
import VideoItemDetails from '../VideoItemDetails'

const VideoItem = props => {
  const {videoData} = props
  const {id, title,thumbnailUrl, name, profileImageUrl, viewCount,publishedAt} = videoData
  
  const formattedDate = formatDistanceToNow((new Date(publishedAt)))

  const showVideoDetails = ()=> {
    return(
      <div>
        <VideoItemDetails/>
      </div>
    )
  }
  
  return (
    <Link to={`/videos/${id}`}>
    <VideoItemList key={id} $mode={props.mode} onClick={showVideoDetails}>
      <Thumbnail src={thumbnailUrl} alt="thumbnail"/>
      <DetailsContainer>
      <Profile src={profileImageUrl} className='profile-img' alt="profile image"/>
        <Container>
          <Title>{title}</Title>
          <Para>by {name}</Para>
          <ProductDetails >
            <View >{viewCount} Views</View>
            <RatingContainer>
              <View>{formattedDate}</View>
        </RatingContainer>    
      </ProductDetails>
        </Container>
      </DetailsContainer>
    </VideoItemList>
    </Link>
  )
}
export default VideoItem