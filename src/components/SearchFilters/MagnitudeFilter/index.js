import MagnitudeFilterContainer from "./styles";
import { LongitudeDropdown } from "../LongitudeFilter/styles";
import { FilterButton, NumberInputField } from "../../../styles/global"
import { useRef } from "react";

export default function MagnitudeFilter({filterFunction, input, setInputReferences}) {
    const dropdown = useRef(null);

    function setValue(input) {
        if(input === undefined) {
            setInputReferences(input);
        }
    }

    function callFilterFunction() {
        if(input == undefined) {
            input.target.value = 0;
        }

        filterFunction(dropdown.current.value, input.target.value);
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
                    <LongitudeDropdown onChange={(dropdown) => setValue(dropdown, 0)} ref={dropdown}>
                        <option defaultChecked value={0}>= Igual a</option>
                        <option value={1}>≥ Maior ou Igual a</option>
                        <option value={2}>≤ Menor ou Igual a</option>
                    </LongitudeDropdown>

                    <NumberInputField type='number' min={0} max={6} placeholder="Magnitude (ex: 3.4)"
                        onChange={(input) =>{
                            setValue(input);
                            inputValueLimit(input)}
                    }/>
                </div>
                <FilterButton onClick={callFilterFunction}>Filtrar</FilterButton>
            </div>
        </MagnitudeFilterContainer>
    )
}