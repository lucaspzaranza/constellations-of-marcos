import { signs } from '../../../data/zodiac'
import LongitudeDropdown from './styles'

export default function LongitudeFilter() {
    return (
        <>
            <h3>Filtrar pela Longitude</h3>
            <LongitudeDropdown>
                {signs.map(sign => (
                    <option>
                        {sign.symbol} {sign.name}
                    </option>
                ))}
            </LongitudeDropdown>
            <input type='number' placeholder='Grau (ex: 20)'/>
            <input type='number' placeholder='Distância'/>
        </>
    )
}