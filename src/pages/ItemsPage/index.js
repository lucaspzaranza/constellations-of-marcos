import { useMemo, useState } from "react";
import SearchInput from "../../components/SearchInput";
import { MenuItemButton } from "../../styles/global";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BackLinkContainer, BackLinkIconContainer, ItemsPageContainer, HeaderMenu, MenuItemsContainer } from './styles'
import fixedStars from "../../data/fixedStars"
import constellations from "../../data/constellations";

export default function ItemsPage({ title, subtitle, inputPlaceholder, ItemComponent }) {
    const GetDataArray = () => ItemComponent.name === 'Constellation' ? constellations : fixedStars;
    const navigation = useNavigate();
    const location = useLocation();

    const [showItems, setShowItems] = useState(false);
    const [navigationCount, setNavigationCount] = useState(0);
    //location.state === null ? false : location.state;
    const [filteredArray, setFilteredArray] = useState(GetDataArray());
    const [selectedData, setSelectedData] = useState(filteredArray[0]);

    const baseArray = useMemo(() => GetDataArray(), []);

    function filterArray(input) {
        setFilteredArray(baseArray.filter
            (data => data.name.toLowerCase().includes(input.target.value.toLowerCase())));
    }

    function setNavigationCountWrapper(val) {
        console.log('setting navigated to: ', val);
        //setNavigationCount(prevState => (prevState + val) > -1 ? (prevState + val) : 0);
        if(navigationCount + val >= 0) {
            setNavigationCount(prevState => prevState + val);
            console.log('navigationCount: ', navigationCount);
        }
    }

    function toggleShowItems(id) {
        //console.log('has navigated? ', navigated);
        if(showItems && navigationCount > 0) {
            navigation(-1);
            //console.log(location);
            return;
        }


        setSelectedData(baseArray.find(data => data.id === id));
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
                <ItemComponent data={selectedData} backFunction={toggleShowItems} setNavigationCountWrapper={setNavigationCountWrapper}/>
            }
        </ItemsPageContainer>
    )
}