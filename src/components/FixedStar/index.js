import { useMemo } from "react";
import { ConstellationContentContainer, ArticleContainer, ArticleButton, ItemMenuLink } from "../../styles/global";
import constellations from "../../data/constellations";
import fixedStars from "../../data/fixedStars";
import { v4 as uuid } from 'uuid';
import { useLocation } from "react-router-dom";
import { signsShorts, planets } from "../../data/zodiac";

export default function FixedStar({ backFunction, data, setNavigationCountWrapper }) {
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

    function getTransformedLongitude(longitude) {
        const signIndex = Math.trunc(longitude / 30);
        const signDegree = longitude % 30;

        var [numericPart, decimalPart] = signDegree.toString().split('.');
        if(decimalPart === undefined) {
            decimalPart = '00';
        }
        else {
            decimalPart = decimalPart.length === 1 ? `${decimalPart}0` : decimalPart.substring(0, 2);
        }

        return `${numericPart}° ${signsShorts[signIndex]} ${decimalPart}'`;
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
            result += `${planets[planetIndex]}`;

            if(nature.length > 0 && index < nature.length - 1)
                result += ' e '
        }

        return result;
    }

    return(
        <>
            <h2>{star.name}</h2>
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