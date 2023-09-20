import { useMemo } from 'react';
import constellations from '../../../data/constellations.json';
import Dropdown from './styles';
import { removeAccents } from '../../../shared';

export default function ConstellationFilter({filterFunction}) {

    const orderedArray = useMemo(() => constellations.sort((a, b) =>
        removeAccents(a.name) >= removeAccents(b.name)? 1 : -1
    ), []);

    function filter(event) {
        const id = event.target.value;
        filterFunction(id);
    }

    return (
        <>
            <h3>Filtrar por Constelação</h3>
            <Dropdown onChange={filter}>
                <option value="-1">
                    Selecione uma Constelação
                </option>
                {
                    orderedArray.map((constellation, index) => (
                            <option key={index} value={constellation.id}>
                                {constellation.name}
                            </option>
                        )
                    )
                }
            </Dropdown>
        </>
    )
}