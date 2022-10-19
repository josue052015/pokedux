import { useDispatch, useSelector, RootStateOrAny, } from "react-redux"
import { getPokemonsAction } from '../redux/pokeDucks'

export default function Pokemons() {

    const dispatch = useDispatch();
    let counter = 0
    const pokemonsArray = useSelector((store: any) => store.pokemons)

    console.log(pokemonsArray)
    return (
        <>
            Lista de pokemones
            <button onClick={() => dispatch(getPokemonsAction())}>Get Pokemons</button>
            <ul>
                {
                    pokemonsArray.pokemons.map((item: any) => {
                        return <li key={counter += 1}>{item.name}</li>
                    })
                }
            </ul>
        </>
    )
}