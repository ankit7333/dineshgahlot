import { Container } from 'react-bootstrap';
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'
import Thumbnailslider from '../components/Thumbnailslider'
import Doityourway from '../components/Doityourway'
import Anywherebeyond from '../components/Anywherebeyond'
export default function Home() {
    return (
        <Container fluid className="p-0">
            <Hero />
            <Gallery />
            <Testimonial />
            <Doityourway />
            <Anywherebeyond />
            <Thumbnailslider />
        </Container>
    )
}
