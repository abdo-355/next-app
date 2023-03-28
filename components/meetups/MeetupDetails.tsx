/* eslint-disable @next/next/no-img-element */
import styles from "./MeetupDetails.module.css";

interface Props {
    image: string;
    title: string;
    address: string;
    description: string;
}

const MeetupDetails: React.FC<Props> = ({ title, image, address, description }) => {
    return <section className={styles.detail}>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
    </section>
}

export default MeetupDetails;
