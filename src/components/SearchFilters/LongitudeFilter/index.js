import { signs } from '../../../data/zodiac'
import { LongitudeDropdown, LongitudeFilterContainer } from './styles'
import { FilterButton, NumberInputField } from '../../../styles/global';

export default function LongitudeFilter({filterFunction, inputs}) {
    const [min, max, minuteMax] = [0, 29.59, 59];

    function valueCheck(input) {
        if(input.target.value < min) {
            input.target.value = min;
        }

        if(input.target.value > max) {
            input.target.value = max;
        }

        var [integer, decimal] = input.target.value.split('.');
        if(decimal !== undefined) {
            decimal = decimal > minuteMax? minuteMax : decimal;
            input.target.value = `${integer}.${decimal}`;
        }
    }

    function retrieveDataAndApplyFilter() {
        const signIndex = inputs[0].current.value;
        const longitude = inputs[1].current.value !== '' ? inputs[1].current.value : 0;
        const distance = inputs[2].current.value !== '' ? inputs[2].current.value : 0;

        filterFunction(signIndex, longitude, parseFloat(distance));
    }

    return (
        <>
            <LongitudeFilterContainer>
                <div>
                    <h3>Filtrar pela Longitude</h3>
                    <LongitudeDropdown ref={inputs[0]}>
                        {signs.map(sign => (
                            <option key={signs.indexOf(sign)} value={signs.indexOf(sign)}>
                                {sign.symbol} {sign.name}
                            </option>
                        ))}
                    </LongitudeDropdown>
                    <div>
                        <NumberInputField type='number' placeholder='Grau (ex: 14.37)' onChange={valueCheck} ref={inputs[1]}/>
                        <NumberInputField type='number' placeholder='Distância (ex: 2.3)' onChange={valueCheck} ref={inputs[2]}/>
                    </div>
                    <FilterButton onClick={retrieveDataAndApplyFilter}>Filtrar</FilterButton>
                </div>
            </LongitudeFilterContainer>
        </>
    )
}