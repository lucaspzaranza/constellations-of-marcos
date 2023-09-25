import { planets } from "../../../data/zodiac"
import  NatureFilterContainer, { CheckBoxesContainer, CheckBoxesColumns } from "./styles"
import { FilterButton } from "../../../styles/global"

export default function NatureFilter({filterFunction, checkboxes}) {

    function filter() {
        const checkboxesValues = checkboxes.map(checkbox => new Object({
            checked: checkbox.current.checked,
            value: checkbox.current.value
        }));
        filterFunction(checkboxesValues);
    }

    return (
        <NatureFilterContainer>
            <h3>Filtrar por Natureza</h3>
            <CheckBoxesColumns>
                <CheckBoxesContainer>
                    {planets.map((planet, index) => (
                        index < 4 &&
                        <div key={index}>
                            <input type="checkbox" id={planet.name} value={index} ref={checkboxes[index]}/>
                            <label htmlFor={planet.name}>{planet.name} {planet.symbol}</label>
                        </div>
                    ))}
                </CheckBoxesContainer>
                <CheckBoxesContainer>
                    {planets.map((planet, index) => (
                        index >= 4  &&
                        <div key={index}>
                            <input type="checkbox" id={planet.name} value={index} ref={checkboxes[index]}/>
                            <label htmlFor={planet.name}>{planet.name} {planet.symbol}</label>
                        </div>
                    ))}
                    
                    <div key={8}>
                        <input type="checkbox" id='not-specified' value={8} ref={checkboxes[7]}/>
                        <label htmlFor='not-specified'>Não especificada</label>
                    </div>
                </CheckBoxesContainer>
            </CheckBoxesColumns>
            <FilterButton onClick={filter}>Filtrar</FilterButton>
        </NatureFilterContainer>
        
    )
}