import { useMemo } from 'react';
import constellations from '../../../data/constellations.json';
import Dropdown from './styles';

export default function ConstellationFilter({filterFunction}) {
    const removeAccents = str =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const orderedArray = useMemo(() => constellations.sort((a, b) =>
        removeAccents(a.name) >= removeAccents(b.name)? 1 : -1
    ), []);

    function filter(event) {
        const id = event.target.value;
        filterFunction(id);
    }

    return (
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
    )
}