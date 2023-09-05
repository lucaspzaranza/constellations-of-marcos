import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import { MenuItemButton } from "../../styles/global";
import { Link } from "react-router-dom";
import { BackLinkContainer, BackLinkIconContainer, ItemsPageContainer, HeaderMenu, MenuItemsContainer } from './styles'

export default function ItemsPage({ title, subtitle, inputPlaceholder, ItemComponent }) {
    const [showItems, setShowItems] = useState(false);
    const [filteredArray, setFilteredArray] = useState([]);
    const [selectedData, setSelectedData] = useState(filteredArray[0]);

    const loadedData = [
        {
            id: 1,
            name: 'Perseu'
        },
        {
            id: 2,
            name: 'Pegasus'
        },
        {
            id: 3,
            name: 'Ceto'
        },
        {
            id: 4,
            name: 'Andrômeda'
        },
        {
            id: 5,
            name: 'Virgem'
        },
        {
            id: 6,
            name: 'Libra'
        },
        {
            id: 7,
            name: 'Ofiúco'
        }
    ]

    useState(() => {
        setFilteredArray(loadedData);
    }, []);

    function filterArray(input) {
        setFilteredArray(loadedData.filter
            (data => data.name.toLowerCase().includes(input.target.value.toLowerCase())));
    }

    function toggleShowItems(id) {
        setSelectedData(loadedData.find(data => data.id === id));
        setShowItems(prevState => !prevState);
    }

    return (
        <ItemsPageContainer>
            {!showItems ?
            <>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>

                <HeaderMenu>
                    <BackLinkIconContainer to="/">⬅ Voltar</BackLinkIconContainer>
                    <SearchInput placeholder={inputPlaceholder} filterFunction={filterArray}/>
                </HeaderMenu>

                <MenuItemsContainer>
                    {filteredArray.length === 0 && (
                        <p>Sua busca não encontrou nenhum resultado.</p>
                    )}

                    {filteredArray.map(item => (
                        <MenuItemButton key={item.id} type="button" onClick={() => toggleShowItems(item.id)}>
                            {item.name}
                        </MenuItemButton>
                    ))}
                </MenuItemsContainer>

                <BackLinkContainer>
                    <Link to="/">⬅ Voltar</Link>
                </BackLinkContainer>
            </>
            :
                <ItemComponent data={selectedData} backFunction={toggleShowItems}/>
            }
        </ItemsPageContainer>
    )
}