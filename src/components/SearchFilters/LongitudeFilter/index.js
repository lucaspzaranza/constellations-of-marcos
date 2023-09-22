import { useRef } from 'react';
import { signs } from '../../../data/zodiac'
import { LongitudeDropdown, LongitudeFilterContainer } from './styles'
import { FilterButton, NumberInputField } from '../../../styles/global';

export default function LongitudeFilter({filterFunction, inputs, setInputReferences}) {
    const [min, max, minuteMax] = [0, 29.59, 59];
    const signDropdown = useRef(null);
    const longitudeInput = useRef(null);
    const distanceInput = useRef(null);

    function valueCheck(input, index) {
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

        if(inputs[index] === undefined) {
            setInputReferences[index](input);
        }
    }

    function retrieveDataAndApplyFilter() {
        const signIndex = signDropdown.current.value;
        const longitude = longitudeInput.current.value !== '' ? longitudeInput.current.value : 0;
        const distance = distanceInput.current.value !== '' ? distanceInput.current.value : 0;

        filterFunction(signIndex, longitude, parseFloat(distance));
    }

    return (
        <>
            <LongitudeFilterContainer>
                <div>
                    <h3>Filtrar pela Longitude</h3>
                    <LongitudeDropdown ref={signDropdown}>
                        {signs.map(sign => (
                            <option key={signs.indexOf(sign)} value={signs.indexOf(sign)}>
                                {sign.symbol} {sign.name}
                            </option>
                        ))}
                    </LongitudeDropdown>
                    <div>
                        <NumberInputField type='number' value={inputs[0]} placeholder='Grau (ex: 14.37)'
                            min={min} max={max} onChange={(input) => valueCheck(input, 0)} ref={longitudeInput}/>

                        <NumberInputField type='number' value={inputs[1]} placeholder='Distância (ex: 2.3)'
                            min={min} max={max} onChange={(input) => valueCheck(input, 1)} ref={distanceInput}/>
                    </div>
                    <FilterButton onClick={retrieveDataAndApplyFilter}>Filtrar</FilterButton>
                </div>
            </LongitudeFilterContainer>
        </>
    )
}