import { Container } from 'react-bootstrap';
import Menu from '../Nav'
import MyCarousel from '../Carousel'
export default function Hero() {
    return (
        <Container fluid className="p-0">
            <Menu />
            <MyCarousel fadeTransition={true} caption={true} />
        </Container>
    )
}
