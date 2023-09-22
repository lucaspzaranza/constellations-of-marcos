import { Fragment, useState } from "react";
import ConstellationFilter from "../SearchFilters/ConstellationFilter";
import LongitudeFilter from "../SearchFilters/LongitudeFilter";
import LatitudeFilter from "../SearchFilters/LatitudeFilter";
import MagnitudeFilter from "../SearchFilters/MagnitudeFilter";
import CategoryFilter from "../SearchFilters/CategoryFilter";
import NatureFilter from "../SearchFilters/NatureFilter";
import FilterContainer, { ToggleFilterMenuButton } from "./styles";

export default function StarFilterSearch({filterFunctions, clearFilters}) {
    const [showOptions, setShowOptions] = useState(false);
    const [optionSelectedIndex, setOptionSelected] = useState(0);
    const [constellationDropdown, setDropdown] = useState(undefined);

    var longitudeInputs = [undefined, undefined];
    const setLongitudeInput = input => longitudeInputs[0] = input;
    const setDistanceInput = input => longitudeInputs[1] = input;

    var latitudeInputs = [undefined, undefined];
    const setLatitudeDropdown = dropdown => latitudeInputs[0] = dropdown;
    const setLatitudeInput = input => latitudeInputs[1] = input;

    const filterOptions = [
        {
            value: 'constellation',
            label: "Constelação",
            component: <ConstellationFilter filterFunction={filterFunctions[0]} dropdownValue={constellationDropdown}
                setDropdownReference={setDropdown}/>
        },

        {
            value: 'longitude',
            label: "Longitude",
            component: <LongitudeFilter filterFunction={filterFunctions[1]} inputs={longitudeInputs}
                setInputReferences={[setLongitudeInput, setDistanceInput]}/>
        },

        {
            value: 'latitude',
            label: "Latitude",
            component: <LatitudeFilter filterFunction={filterFunctions[2]} inputs={latitudeInputs}
                setInputReferences={[setLatitudeDropdown, setLatitudeInput]}/>
        },

        {
            value: 'magnitude',
            label: "Magnitude",
            component: <MagnitudeFilter filterFunction={filterFunctions[3]}/>
        },

        {
            value: 'category',
            label: "Categoria",
            component: <CategoryFilter filterFunction={filterFunctions[4]}/>
        },

        {
            value: 'nature',
            label: "Natureza",
            component: <NatureFilter filterFunction={filterFunctions[5]}/>
        }
    ];

    function clearFiltersWrapper() {
        if(constellationDropdown !== undefined) {
            constellationDropdown.target.value = -1;
        }

        longitudeInputs.forEach(input => {
            if(input !== undefined) {
                input.target.value = '';
            }
        });

        latitudeInputs.forEach((input, index) => {
            if(input !== undefined) {
                input.target.value = index == 0 ? 0 : '';
            }
        });

        clearFilters();
    }

    return (
        <>
            {showOptions? (
                <>
                    <FilterContainer>
                        <form>
                            {filterOptions.map((filter, index) => (
                                <Fragment key={index}>

                                    <button type="button" defaultChecked={index === 0} onClick={() => setOptionSelected(index)}>
                                        {filter.label}
                                    </button>
                                </Fragment>
                            ))}
                        </form>

                        <br/>

                        {filterOptions[optionSelectedIndex].component}
                        <br/>
                        <button className="clear-filters" onClick={clearFiltersWrapper}>Limpar Filtros 🗑</button>
                    </FilterContainer>
                    <ToggleFilterMenuButton onClick={() => setShowOptions(false)}>Fechar ▲</ToggleFilterMenuButton>
                </>
            )
            :
            (
                <ToggleFilterMenuButton onClick={() => setShowOptions(true)}>Exibir mais filtros ▼</ToggleFilterMenuButton>
            )}
        </>
    )
}