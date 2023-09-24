import { FilterButton, NumberInputField } from "../../../styles/global"
import { LongitudeDropdown } from "../LongitudeFilter/styles"
import { LatitudeFilterContainer } from "./styles"

export default function LatitudeFilter({filterFunction, inputs}) {

    function callFilterFunction() {
        filterFunction(inputs.map(input => input.current.value));
    }

    return (
        <LatitudeFilterContainer>
            <div>
                <h3>Filtrar pela Latitude</h3>
                    <LongitudeDropdown ref={inputs[0]}>
                        <option value={0} defaultChecked>Selecione a Direção</option>
                        <option value={1}>Norte</option>
                        <option value={-1}>Sul</option>
                    </LongitudeDropdown>
                <div>
                    <NumberInputField type='number' placeholder="Latitude (ex: 2)" ref={inputs[1]}/>
                    <NumberInputField type='number' placeholder="Distância (ex: 3.45)" ref={inputs[2]}/>

                </div>
                <FilterButton onClick={callFilterFunction}>Filtrar</FilterButton>
            </div>
        </LatitudeFilterContainer>
    )
}