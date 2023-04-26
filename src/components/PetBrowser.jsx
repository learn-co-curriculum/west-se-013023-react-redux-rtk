import { useSelector } from "react-redux";
import Pet from './Pet'

export default function PetBrowser() {

    const pets = useSelector(state => state.pets)

    const petCards = pets.map(pet => <Pet key={pet.id} pet={pet} />)

  return (
    <div className="ui cards">
        {petCards}
    </div>
  )
}
