import { Container } from 'react-bootstrap';
import styles from './styles.module.scss'
export default function Doityourway() {
    return (
        <Container fluid className="p-0">
            <div className={`${styles.containerbg} d-flex justify-content-center align-items-center text-center`}>
                <h5 className="text-white">Do it Your Way. <br/> Elope in Your <br/> Dream Location</h5>
            </div>
        </Container>
    )
}
