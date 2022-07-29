import React from 'react';
import axios from 'axios';
import styles from './Card.module.scss';

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ imageUrl, title, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ imageUrl, title, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img
                    src={isFavorite ? '/img/liked.svg' : '/img/heart-unliked.svg'}
                    alt="Favorite Button"
                />
            </div>
            <img width={133} height={112} src={imageUrl} alt="nike-bleazer" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-add.svg'}
                    alt="Btn-add-to-card"
                />
            </div>
        </div>
    );
}

export default Card;
