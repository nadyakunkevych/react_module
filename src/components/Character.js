
function Character (props) {

    let {name, background, picture} = props;

    return (
        <div>

            <h2>{name} </h2>
            <p> {background} </p>
            <img src={picture} alt=""/>

        </div>
    );
};

export default Character;