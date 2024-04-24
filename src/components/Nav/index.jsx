import { usePhotos } from '../../contexts/PhotosContext'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import styles from './styles.module.scss'
export default function Menu() {
    const {isScrolled} = usePhotos();
    return (
        <Container fluid className={`top-0 start-0 end-0 z-index-2 p-0 ${!isScrolled ? `position-absolute` : `position-fixed bg-white`}`}>
            <Navbar expand="lg" className={`justify-content-between ${styles.menu}`}>
                <Navbar.Brand href="#home">DINESHGAHLOT.COM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="flex-grow-0" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <NavDropdown title="PORTFOLIO" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#portfolio">PORTFOLIO 1</NavDropdown.Item>
                            <NavDropdown.Item href="#portfolio">PORTFOLIO 2</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                        <Nav.Link href="#testimonial">TESTIMONIAL</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
