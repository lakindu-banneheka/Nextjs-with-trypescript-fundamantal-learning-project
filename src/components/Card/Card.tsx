import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { imageLoader } from '../../hooks/ImageHooks';
import styles from './Card.module.css';

interface ICardProps {
    name: string, 
    phone: string, 
    email: string, 
    image: {
        url:string,
        alt: string;
    }, 
    id: number
};

const Card: FC<ICardProps> = ({name, phone, email, image, id}) => {

    const router = useRouter();

    const onClikCard = (id: number) => {
        router.push(`/cats/${id}`);
    }
    return ( 
        <>
        { name !== '' 
            ? <div className={styles.card} onClick={() => onClikCard(id)} >
                <div className={styles['card-header']} >
                    <Image src={image.url} alt={image.alt} loader={imageLoader} width='200px' height={"200px"} unoptimized className={styles['card-img']} />
                    <div >
                        <h3>{name}</h3>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
            : <></>
        }
        </>
    );
};

export default Card;