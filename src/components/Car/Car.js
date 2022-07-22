
const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            <div>ID: {id}</div>
            <div>PRICE: {price}</div>
            <div>MODEL: {model}</div>
            <div>YEAR: {year}</div>
        </div>
    );
};

export {Car};