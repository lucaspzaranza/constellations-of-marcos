import { useContext, useMemo, useState } from "react";
import SearchInput from "../../components/SearchInput";
import { MenuItemButton, MenuItemNameContainer } from "../../styles/global";
import { Link, useNavigate } from "react-router-dom";
import { BackLinkContainer, BackLinkIconContainer, ItemsPageContainer, HeaderMenu, MenuItemsContainer } from './styles'
import fixedStars from "../../data/fixedStars"
import constellations from "../../data/constellations";
import constellationIcon from '../../assets/svg/constellation.svg'
import starIcon from '../../assets/svg/star.svg';
import getTransformedLongitude, { removeAccents } from "../../shared";
import StarFilterSearch from "../../components/StarFilterSearch";

export default function ItemsPage({ title, subtitle, inputPlaceholder, ItemComponent, isConstellation }) {

    const GetDataArray = () => isConstellation ?
    constellations.sort((a, b) => removeAccents(a.name) >= removeAccents(b.name)? 1 : -1)
    : fixedStars.sort((a, b) => a.longitude >= b.longitude? 1 : -1);

    const navigation = useNavigate();

    const [showItems, setShowItems] = useState(false);
    const [filteredArray, setFilteredArray] = useState(GetDataArray());
    const [selectedData, setSelectedData] = useState(filteredArray[0]);
    const [navigationCounter, setCounter]= useState(0);

    const baseArray = useMemo(() => GetDataArray(), []);

    function filterArray(input) {
        setFilteredArray(baseArray.filter
            (data => data.name.toLowerCase().includes(input.target.value.toLowerCase())));
    }

    function setNavigationCountWrapper(val) {
        var logic = val < 0 && navigationCounter > 0; // moving back the navigation
        logic |= val > 0;

        if(logic) {
            setCounter(navigationCounter + val);
        }
    }

    function toggleShowItems(id) {
        if(showItems && navigationCounter > 0) {
            navigation(-1);
            return;
        }

        setSelectedData(baseArray.find(data => data.id === id));
        setShowItems(prevState => !prevState);
    }

    function filterByConstellation(id) {
        id>= 0?
            setFilteredArray(baseArray.filter(data => data.constellationID == id))
        :
            setFilteredArray(baseArray);
    }

    const filterFunctions = [
        filterByConstellation
    ]

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
                {
                    !isConstellation && // fixedStars only
                    (
                        <StarFilterSearch filterFunctions={filterFunctions}/>
                    )
                }

                <MenuItemsContainer>
                    {filteredArray.length === 0 && (
                        <p>Sua busca não encontrou nenhum resultado.</p>
                    )}

                    {filteredArray.map(item => (
                        <MenuItemButton key={item.id} type="button" onClick={() => toggleShowItems(item.id)}>
                            <MenuItemNameContainer>
                                <img src={isConstellation? constellationIcon : starIcon} alt="itemIcon"/>
                                {' ' + item.name + (isConstellation? '' : ` ${getTransformedLongitude(item.longitude)}`)}
                            </MenuItemNameContainer>
                        </MenuItemButton>
                    ))}
                </MenuItemsContainer>

                <BackLinkContainer>
                    <Link to="/">⬅ Voltar</Link>
                </BackLinkContainer>
            </>
            :
                <ItemComponent data={selectedData} backFunction={toggleShowItems}
                    setNavigationCountWrapper={setNavigationCountWrapper}/>
            }
        </ItemsPageContainer>
    )
}