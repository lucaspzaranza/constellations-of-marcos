import { Fragment, useMemo, useRef, useState } from "react";
import ConstellationFilter from "../SearchFilters/ConstellationFilter";
import LongitudeFilter from "../SearchFilters/LongitudeFilter";
import LatitudeFilter from "../SearchFilters/LatitudeFilter";
import MagnitudeFilter from "../SearchFilters/MagnitudeFilter";
import CategoryFilter from "../SearchFilters/CategoryFilter";
import NatureFilter from "../SearchFilters/NatureFilter";
import FilterContainer, { ToggleFilterMenuButton } from "./styles";

export default function StarFilterSearch({filterFunctions, clearFilters, changeStarDescription}) {
    const [showOptions, setShowOptions] = useState(false);
    const [optionSelectedIndex, setOptionSelected] = useState(0);

    const constellationDropdown = useRef(null);
    const longitudeInputs = [useRef(null), useRef(null), useRef(null)];
    const latitudeInputs = [useRef(null), useRef(null), useRef(null)];
    const magnitudeInputs = [useRef(null), useRef(null)]
    const categoryDropdown = useRef(null);
    const natureCheckoxes = [useRef(null), useRef(null), useRef(null), 
        useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    function chooseTab(index) {
        setOptionSelected(index);
        changeStarDescription(index);
    }

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
            component: <MagnitudeFilter filterFunction={filterFunctions[3]} inputs={magnitudeInputs}/>
        },

        {
            value: 'category',
            label: "Categoria",
            component: <CategoryFilter filterFunction={filterFunctions[4]} dropdownReference={categoryDropdown}/>
        },

        {
            value: 'nature',
            label: "Natureza",
            component: <NatureFilter filterFunction={filterFunctions[5]} checkboxes={natureCheckoxes}/>
        }
    ];

    function clearFiltersWrapper() {
        if(constellationDropdown.current !== null) {
            constellationDropdown.current.value = -1;
        }

        longitudeInputs.forEach((input, index) => {
            if(input.current !== null) {
                input.current.value = index == 0 ? 0 : '';
            }
        });

        latitudeInputs.forEach((input, index) => {
            if(input.current !== null) {
                input.current.value = index == 0 ? 0 : '';
            }
        });

        magnitudeInputs.forEach((input, index) => {
            if(input.current !== null) {
                input.current.value = index == 0 ? 0 : '';
            }
        });

        natureCheckoxes.forEach(checkbox => {
            if(checkbox.current !== null && checkbox.current.checked) {
                checkbox.current.checked = false;
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
                                    <button type="button" onClick={() => chooseTab(index)}>
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