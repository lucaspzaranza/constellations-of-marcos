import { useMemo } from "react";
import { ConstellationContentContainer, ArticleContainer, DetailsPageHeader2Container,
     ArticleButton, ItemMenuLink } from "../../styles/global";
import constellations from "../../data/constellations";
import fixedStars from "../../data/fixedStars";
import { v4 as uuid } from 'uuid';
import { useLocation } from "react-router-dom";
import { signs, planets } from "../../data/zodiac";
import starSVG from '../../assets/svg/star.svg'
import starDarkSVG from '../../assets/svg/star-dark.svg'
import { useTheme } from "styled-components";
import dark from "../../styles/themes/dark";
import getTransformedLongitude from "../../shared";

export default function FixedStar({ backFunction, data, setNavigationCountWrapper }) {
    const theme = useTheme();
    const location = useLocation();
    const star = location.state === null ? data : location.state;
    const notSpecified = 'Não especificada';

    const constellationName = useMemo(
        () => constellations
        .find(constellation => constellation.id === star.constellationID).name,
        [constellations, fixedStars]
    );

    function getConstellationData(id) {
        return constellations.find(constellation => constellation.id === id);
    }

    function getTransformedLatitude(latitude) {
        const [numericPart, decimalPart] = latitude.toString().split('.');
        return `${numericPart}°${decimalPart !== undefined? decimalPart + "'" : ''}`
    }

    function getStarCategory(category) {
        return category === 0 ? 'Estrela Fixa' : 'Nebulosa';
    }

    function getStarNature(nature) {
        if(nature === null) {
            return null;
        }

        var result = '';
        for (let index = 0; index < nature.length; index++) {
            const planetIndex = nature[index];
            const planet = planets[planetIndex];
            result += `${planet.name} ${planet.symbol}`;

            if(nature.length > 0 && index < nature.length - 1)
                result += ' e '
        }

        return result;
    }

    return(
        <>
            <DetailsPageHeader2Container>
                <img src={theme.background === dark.background ? starSVG : starDarkSVG} alt="starSVG"/>
                {star.name}
            </DetailsPageHeader2Container>
            <ConstellationContentContainer>
                <ArticleContainer>
                    <section>
                        <span>Longitude: {getTransformedLongitude(star.longitude) || notSpecified}</span>
                        <span>Latitude: {getTransformedLatitude(star.latitude) || notSpecified}</span>
                        <span>Magnitude: {star.magnitude || notSpecified}</span>
                        <span>Tipo: {getStarCategory(star.category) || notSpecified}</span>

                        <ItemMenuLink to="/constellations" state={getConstellationData(star.constellationID)}
                            onClick={() => setNavigationCountWrapper(1)}>
                            Constelação: {constellationName || notSpecified}
                        </ItemMenuLink>

                        <span>Natureza: {getStarNature(star.nature) || notSpecified}</span>
                    </section>
                    <section>
                        {
                            star.description.map(paragraph => (
                                <p key={uuid()}>
                                    {paragraph}
                                </p>
                            ))
                        }
                    </section>
                </ArticleContainer>
                <ArticleButton onClick={() => {
                    backFunction();
                    setNavigationCountWrapper(-1);
                }}>
                    Voltar
                </ArticleButton>
            </ConstellationContentContainer>
        </>
    )
}