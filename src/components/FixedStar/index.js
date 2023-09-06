import { useMemo } from "react";
import { ConstellationContentContainer, ArticleContainer, ArticleButton, ItemMenuLink } from "../../styles/global";
import constellations from "../../data/constellations";
import { v4 as uuid } from 'uuid';
import { useLocation } from "react-router-dom";
import { signsShorts } from "../../data/signs";

export default function FixedStar({ backFunction, data, setNavigationCountWrapper }) {
    const location = useLocation();
    const star = location.state === null ? data : location.state;

    const constellationName = useMemo(
        () => constellations
        .find(constellation => constellation.id === star.constellationID).name,
        [constellations]
    );

    function getConstellationData(id) {
        return constellations.find(constellation => constellation.id === id);
    }

    function getTransformedLongitude(longitude) {
        const signIndex = Math.trunc(longitude / 30);
        const signDegree = longitude % 30;

        var [numericPart, decimalPart] = signDegree.toString().split('.');
        decimalPart = decimalPart.length === 1 ? `${decimalPart}0` : decimalPart.substring(0, 2);

        return `${numericPart}° ${signsShorts[signIndex]} ${decimalPart}'`;
    }

    function getStartCategory(category) {
        return category === 0 ? 'Estrela Fixa' : 'Nebulosa';
    }

    return(
        <>
            <h2>{star.name}</h2>
            <ConstellationContentContainer>
                <ArticleContainer>
                    <section>
                        {/* <span>Longitude: {star.longitude}</span> */}
                        <span>Longitude: {getTransformedLongitude(star.longitude)}</span>
                        <span>Latitude: {star.latitude}</span>
                        <span>Magnitude: {star.magnitude}</span>
                        <span>Tipo: {getStartCategory(star.category)}</span>

                        <ItemMenuLink to="/constellations" state={getConstellationData(star.constellationID)}
                            onClick={() => setNavigationCountWrapper(1)}>
                            Constelação: {constellationName}
                        </ItemMenuLink>

                        <span>Natureza: {star.nature}</span>
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