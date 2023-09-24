import { Fragment, useMemo, useRef, useState } from "react";
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

    const constellationDropdown = useRef(null);
    const longitudeInputs = [useRef(0), useRef(0), useRef(0)];
    const latitudeInputs = [useRef(0), useRef(0), useRef(0)];

    // const setLatitudeDropdown = dropdown => latitudeInputs[0] = dropdown;
    // const setLatitudeInput = input => latitudeInputs[1] = input;
    // const setLatitudeDistanceInput = input => latitudeInputs[2] = input;

    var magnitudeInput = useMemo(() => undefined, []);
    //const setMagnitudeDropdown = dropdown => magnitudeInputs[0] = dropdown;
    const setMagnitudeInput = input => magnitudeInput = input;

    const filterOptions = [
        {
            value: 'constellation',
            label: "Constelação",
            component: <ConstellationFilter filterFunction={filterFunctions[0]} dropdownReference={constellationDropdown}/>
        },

        {
            value: 'longitude',
            label: "Longitude",
            component: <LongitudeFilter filterFunction={filterFunctions[1]} inputs={longitudeInputs}/>
        },

        {
            value: 'latitude',
            label: "Latitude",
            component: <LatitudeFilter filterFunction={filterFunctions[2]} inputs={latitudeInputs}/>
        },

        {
            value: 'magnitude',
            label: "Magnitude",
            component: <MagnitudeFilter filterFunction={filterFunctions[3]} input={magnitudeInput}
                setInputReferences={[setMagnitudeInput]}/>
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
        if(constellationDropdown.current !== null) {
            constellationDropdown.current.value = -1;
        }

        longitudeInputs.forEach((input, index) => {
            if(input.current !== 0 && input.current !== null) {
                input.current.value = index == 0 ? 0 : '';
            }
        });

        latitudeInputs.forEach((input, index) => {
            if(input.current !== 0 && input.current !== null) {
                input.current.value = index == 0 ? 0 : '';
            }
        });

        // magnitudeInputs.forEach((input, index) => {
        //     if(input !== undefined) {
        //         input.target.value = index == 0 ? 0 : '';
        //     }
        // });

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