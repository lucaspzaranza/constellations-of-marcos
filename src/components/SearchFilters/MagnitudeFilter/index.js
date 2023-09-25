import MagnitudeFilterContainer from "./styles";
import { LongitudeDropdown } from "../LongitudeFilter/styles";
import { FilterButton, NumberInputField } from "../../../styles/global"
import { useRef } from "react";

export default function MagnitudeFilter({filterFunction, inputs}) {

    function callFilterFunction() {
        if(inputs[0].current != null) {
            filterFunction(inputs[0].current.value, inputs[1].current.value);
        }
    }

    function inputValueLimit(input) {
        const value = input.target.value;
        if(value < 0) {
            input.target.value = 0;
        }
        else if(value > 6) {
            input.target.value = 6;
        }
    }

    return (
        <MagnitudeFilterContainer>
            <div>
                <h3>Filtrar pela Magnitude</h3>
                <div>
                    <LongitudeDropdown ref={inputs[0]}>
                        <option defaultChecked value={0}>= Igual a</option>
                        <option value={1}>≥ Maior ou Igual a</option>
                        <option value={2}>≤ Menor ou Igual a</option>
                    </LongitudeDropdown>

                    <NumberInputField type='number' placeholder="Magnitude (ex: 3.4)" onChange={inputValueLimit} ref={inputs[1]}/>
                </div>
                <FilterButton onClick={callFilterFunction}>Filtrar</FilterButton>
            </div>
        </MagnitudeFilterContainer>
    )
}