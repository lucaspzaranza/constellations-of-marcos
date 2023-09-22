import { FilterButton, NumberInputField } from "../../../styles/global"
import { LongitudeDropdown } from "../LongitudeFilter/styles"
import { LatitudeFilterContainer } from "./styles"

export default function LatitudeFilter({filterFunction, inputs, setInputReferences}) {

    function setValue(input, index) {
        if(inputs[index] === undefined) {
            setInputReferences[index](input);
        }
    }

    return (
        <LatitudeFilterContainer>
            <div>
                <h3>Filtrar pela Latitude</h3>
                <div>
                    <LongitudeDropdown onChange={(dropdown) => setValue(dropdown, 0)}>
                        <option value={0} defaultChecked>Selecione a Direção</option>
                        <option value={1}>Norte</option>
                        <option value={-1}>Sul</option>
                    </LongitudeDropdown>
                    <NumberInputField type='number' min={0} max={999} placeholder="Distância (ex: 2.3)"
                        onChange={(input) => setValue(input, 1)}/>
                </div>
                <FilterButton onClick={filterFunction}>Filtrar</FilterButton>
            </div>
        </LatitudeFilterContainer>
    )
}