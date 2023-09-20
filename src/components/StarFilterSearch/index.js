import { Fragment, useState } from "react";
import ConstellationFilter from "../SearchFilters/ConstellationFilter";
import LongitudeFilter from "../SearchFilters/LongitudeFilter";
import LatitudeFilter from "../SearchFilters/LatitudeFilter";
import MagnitudeFilter from "../SearchFilters/MagnitudeFilter";
import CategoryFilter from "../SearchFilters/CategoryFilter";
import NatureFilter from "../SearchFilters/NatureFilter";
import FilterContainer, { FilterButton } from "./styles";

export default function StarFilterSearch({filterFunctions}) {
    const [showOptions, setShowOptions] = useState(false);
    const [optionSelectedIndex, setOptionSelected] = useState(0);

    const filterOptions = [
        {
            value: 'constellation',
            label: "Constelação",
            component: <ConstellationFilter filterFunction={filterFunctions[0]}/>
        },

        {
            value: 'longitude',
            label: "Longitude",
            component: <LongitudeFilter filterFunction={filterFunctions[1]}/>
        },

        {
            value: 'latitude',
            label: "Latitude",
            component: <LatitudeFilter filterFunction={filterFunctions[2]}/>
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
    ]

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
                        <button className="clear-filters">Limpar Filtros 🗑</button>
                    </FilterContainer>
                    <FilterButton onClick={() => setShowOptions(false)}>Fechar ▲</FilterButton>
                </>
            )
            :
            (
                <FilterButton onClick={() => setShowOptions(true)}>Exibir mais filtros ▼</FilterButton>
            )}
        </>
    )
}