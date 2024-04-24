import { usePhotos } from '../../contexts/PhotosContext'
import styles from './styles.module.scss'
import { Container } from 'react-bootstrap'
export default function Gallery() {
    const {isHero, isLoading} = usePhotos()
    return (
        <Container className={`h-100 d-grid gap-4 ${styles.gallery__grid}`}>
            {
                isHero.map((value, index) => {
                    return <div key={value.imageTitle} className={`position-relative overflow-hidden ${styles.item} item__${index+1}`}>
                        <img className="d-block w-100" alt={value.imageTitle} src={value.imageUrl} />
                    </div>
                })
            }
        </Container>
    )
}
