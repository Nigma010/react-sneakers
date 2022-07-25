import React from 'react';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
    const [items, setItems] = React.useState([]);
    const [cartOpened, setcartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://62deabb69c47ff309e79706e.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onClose={() => setcartOpened(false)} />}
            <Header onClickCart={() => setcartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search-ic.svg" alt="Search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items.map((obj) => (
                        <Card title={obj.name} price={obj.price} imageUrl={obj.imageUrl} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
