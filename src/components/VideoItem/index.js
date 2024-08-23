
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
   LinkItem
  } from './styledComponents'
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
    <LinkItem to={`/videos/${id}`}>
    <VideoItemList $mode={props.mode} onClick={showVideoDetails}>
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
    </LinkItem>
  )
}
export default VideoItem