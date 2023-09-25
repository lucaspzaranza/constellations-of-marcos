import Dropdown from "../ConstellationFilter/styles"

export default function CategoryFilter({filterFunction, dropdownReference}) {

    function filter() {
        const id = dropdownReference.current.value;
        filterFunction(id);
    }

    return (
        <>
            <h3>Filtrar por Categoria</h3>
            <Dropdown onChange={filter} ref={dropdownReference}>
                <option value={0}>Estrela Fixa</option>
                <option value={1}>Nebulosa</option>
            </Dropdown>
        </>
    )
}