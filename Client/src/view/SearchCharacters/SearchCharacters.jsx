import Cards from "../../components/Cards/Cards";
import styles from './SearchCharacters.module.css'
import SearchBar from "../../components/SearchBar/SearchBar";
import { cleanCharacters, getCharacters, removeCharacter, getLocalStorageCharacters } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SearchCharacters() {

    const dispatch = useDispatch();
    const { allCharacters } = useSelector(state => state)

    // ------------------------LOCAL STORAE---------------
    // useEffect(() => {
    //     const storedCharacters = localStorage.getItem("characters");
    //     if (storedCharacters) {
    //         // const localStorageCharacters = JSON.parse(storedCharacters)
    //         dispatch(getLocalStorageCharacters(JSON.parse(storedCharacters)));
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("characters", JSON.stringify(characters));
    // }, [characters]);

    // ------------------------------------------------

    const onSearch = (id) => {
        if (allCharacters.find(character => character.id === Number(id))) {
            return;
        };
        dispatch(getCharacters(id))
    };

    const onClose = (id) => {
        dispatch(removeCharacter(id))
    };

    const onSearchCharacterRandom = () => {
        const [min, max] = [1, 826]
        const idRandom = Math.floor(Math.random() * (max - min + 1)) + min;

        // Evitamos un character repetido
        if (allCharacters.find(character => character.id === idRandom)) {
            return;
        };
        dispatch(getCharacters(idRandom))
    }

    const handleCleanCharacters = () => {
        dispatch(cleanCharacters())
    }

    return (
        <section className={styles.container}>

            <fieldset className={styles.container__inputs}>
                <SearchBar
                    onSearch={onSearch}
                    onSearchCharacterRandom={onSearchCharacterRandom}
                    handleCleanCharacters={handleCleanCharacters}
                />
            </fieldset>

            <Cards
                onClose={onClose}
                allCharacters={allCharacters}
            />
        </section>
    )
}
