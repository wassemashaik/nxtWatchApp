import {
  GamingListItem, 
  Thumbnail, 
  DetailsContainer, 
  Title, 
  Views
} from './styledComponents'


const GamingCard = props => {
  const {gamingData} = props
  const {id, title,thumbnailUrl,viewCount} = gamingData
    
  return (
    <GamingListItem className="gaming-item" key={id} mode={props.mode}>
      <Thumbnail src={thumbnailUrl} alt="thumbnail"/>
      <DetailsContainer className='details-container'>
          <Title >{title}</Title>
            <Views >{viewCount} Views</Views>
      </DetailsContainer>
    </GamingListItem>
  )
}
export default GamingCard