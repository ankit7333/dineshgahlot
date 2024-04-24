import { usePhotos } from '../../contexts/PhotosContext'
import { Carousel } from 'react-bootstrap';
export default function MyCarousel({fadeTransition, caption}) {
    const {isHero, isLoading} = usePhotos();
    if(isLoading) return <p>Data Loading</p>
    // console.log(isHero)
    return (
        <>
            <Carousel fade={fadeTransition}>
            {
                isHero.map((value) => {
                return  <Carousel.Item key={value.imageTitle}>
                            <img className="d-block w-100" src={value.imageUrl} alt={value.imageTitle} />
                            {
                                caption && <Carousel.Caption>
                                    <h3>{value.imageTitle}</h3>
                                    <p>{value.imageContent}</p>
                                </Carousel.Caption>
                            }
                        </Carousel.Item>
                })
            }
            </Carousel>
        </>
    )
}
