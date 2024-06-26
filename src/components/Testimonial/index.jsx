import { Container } from 'react-bootstrap'
import MyCarousel from '../Carousel'
import styles from './styles.module.scss'
export default function Testimonial() {
    return (
        <Container className={`d-flex justify-content-center align-items-center ${styles.testimonial}`}>
            <div className="row">
                <div className="col-md-6">
                {/* <!-- Testimonial Text --> */}
                <div className="testimonial-text">
                    <h3>Client Testimonial</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>- John Doe</p>
                </div>
                </div>
                <div className="col-md-6">
                {/* <!-- Testimonial Carousel --> */}
                    <MyCarousel caption={false} />
                </div>
            </div>
        </Container>
    )
}
