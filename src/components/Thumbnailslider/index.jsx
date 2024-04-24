import { Container, Carousel } from 'react-bootstrap'
import { usePhotos } from '../../contexts/PhotosContext'
import styles from './styles.module.scss'
export default function Thumbnailslider() {
    const {isHero, isLoading} = usePhotos()
    if(isLoading) return <p>Data Loading</p>
    console.log(isHero)
    return (
        <Container fluid className="p-0">
            <Carousel className={`${styles.thumbnail} ${styles.thumbnail__desktop}`}>
                <Carousel.Item>
                    <div className="d-grid gap-4 h-100">
                        {
                            isHero.map((value) => {
                                return <div key={value.imageTitle} className={`${styles.thumbnail__img}`}>
                                    <img className="d-block w-100" src={value.imageUrl} alt={value.imageTitle} />
                                </div>
                            })
                        }
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-grid gap-4 h-100">
                        {
                            isHero.map((value) => {
                                return <div key={value.imageTitle} className={`${styles.thumbnail__img}`}>
                                    <img className="d-block w-100" src={value.imageUrl} alt={value.imageTitle} />
                                </div>
                            })
                        }
                    </div>
                </Carousel.Item>
            </Carousel>
            <Carousel className={`${styles.thumbnail} ${styles.thumbnail__mobile}`}>
                    {
                        isHero.map((value) => {
                            return <Carousel.Item> <div key={value.imageTitle} className={`${styles.thumbnail__img}`}>
                                <img className="d-block w-100" src={value.imageUrl} alt={value.imageTitle} />
                            </div></Carousel.Item>
                        })
                    }
            </Carousel>
        </Container>
    )
}
