import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from './Favorites.module.css'
import { filterCards, orderCards } from '../../redux/actions/actions'
import { useDispatch } from "react-redux";
import Cards from "../Cards/Cards";

const Favorites = () => {

    // const { id, name, staus, species, gender, origin, imagen, onClose } = props.myFavorites
    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()
    const { myFavorites } = useSelector(state => state)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    };

    const handleFilter = (event) => {
        const { value } = event.target
        dispatch(filterCards(value));
    };

    return (
        <section className={styles.container_fav}>
            <fieldset className={styles.container_selects} >

                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter} >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </fieldset>

            <Cards
                // onClose={onClose}
                allCharacters={myFavorites}
            />
        </section>
    )
};

export default Favorites;

// const mapStateToProps = (state) => ({
//     myFavorites: state.myFavorites
// })

// export default connect(mapStateToProps, null)(Favorites)
