import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setcartOpened] = React.useState(false);

    React.useEffect(() => {
        axios.get('https://62deabb69c47ff309e79706e.mockapi.io/items').then((res) => {
            setItems(res.data);
        });
        axios.get('https://62deabb69c47ff309e79706e.mockapi.io/cart').then((res) => {
            setCartItems(res.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://62deabb69c47ff309e79706e.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onAddToFavorite = (obj) => {
        axios.post('https://62deabb69c47ff309e79706e.mockapi.io/favorite', obj);
        setFavorites((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://62deabb69c47ff309e79706e.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    onClose={() => setcartOpened(false)}
                    onRemove={onRemoveItem}
                />
            )}
            <Header onClickCart={() => setcartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search-ic.svg" alt="Search" />
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue('')}
                                className="clear cu-p"
                                width={32}
                                height={32}
                                src="/img/btn-remove.svg"
                                alt="Clear"
                            />
                        )}
                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            placeholder="Поиск..."
                        />
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items
                        // .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Card
                                key={index}
                                title={item.name}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={(obj) => onAddToFavorite(obj)}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
