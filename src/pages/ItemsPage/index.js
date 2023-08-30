import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import { MenuItemButton } from "../../styles/global";
import { Link } from "react-router-dom";
import { BackLinkContainer, ItemsPageContainer } from './styles'

export default function ItemsPage({ title, subtitle, inputPlaceholder, ItemComponent }) {
    const [showItems, setShowItems] = useState(false);

    function toggleShowItems() {
        setShowItems(prevState => !prevState);
    }

    return (
        <ItemsPageContainer>
            {!showItems ?
            <>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <SearchInput placeholder={inputPlaceholder}/>
                <MenuItemButton type="button" onClick={toggleShowItems}>Pegasus</MenuItemButton>
                <MenuItemButton type="button">Perseu</MenuItemButton>

                <BackLinkContainer>
                    <Link to="/">Voltar</Link>
                </BackLinkContainer>
            </>
            :
                <ItemComponent backFunction={toggleShowItems}/>
            }
        </ItemsPageContainer>
    )
}