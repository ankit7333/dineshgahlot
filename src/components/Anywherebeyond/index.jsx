import { Container } from 'react-bootstrap';
import styles from './styles.module.scss'
import Button from '../Button'
export default function Anywherebeyond() {
    return (
        <Container fluid className={`p-0 d-flex ${styles.containertext}`}>
            <div className={`p-5 d-flex flex-column justify-content-around align-items-center text-center text-black`}>
                <div>
                    <h5>Pacific Northwest or Anywhere Beyond</h5>
                    <p>This is a paragraph, Click edit and enter your own text. You can make changes like making the text bold, underline or italic. This is a great place for you to tell your clients more about your story and to describe the type of photographer you are. You can come back at any time to make more changes.</p>
                </div>
                <Button type={`bg-dark text-white py-2 px-5 border-0 d-flex justify-content-center align-items-center text-center`}>Button</Button>
            </div>
        </Container>
    )
}
