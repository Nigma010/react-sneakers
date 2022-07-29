function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img
                        onClick={onClose}
                        className="removeBtn  cu-p"
                        width={32}
                        height={32}
                        src="/img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>

                {items.length > 0 ? (
                    <div>
                        <div className="items">
                            {items.map((obj) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <img
                                        className="mr-20"
                                        width={70}
                                        height={70}
                                        src={obj.imageUrl}
                                        alt="Items"
                                    />

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.name}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn"
                                        width={32}
                                        height={32}
                                        src="/img/btn-remove.svg"
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб.</b>
                                </li>
                            </ul>
                            <button className="greenButton">
                                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img
                            className="mb-20"
                            width={120}
                            height={120}
                            src="/img/cart-empty.svg"
                            alt="Cart Empty"
                        />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте кроссовки, чтобы сделать заказ</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrow-card.svg" alt="Arrow" /> Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;
