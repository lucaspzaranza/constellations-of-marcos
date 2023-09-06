import { useMemo, useEffect } from "react";
import { ConstellationContentContainer, ArticleContainer, ArticleButton, ItemMenuLink } from "../../styles/global";
import constellations from "../../data/constellations";

export default function FixedStar({ backFunction, data, setNavigationCountWrapper }) {
    const constellationName = useMemo(
        () => constellations
        .find(constellation => constellation.id === data.constellationID).name,
        [constellations]
    );

    useEffect(() => {
        // console.log('Fixed Star data:');
        // console.log(data);
    }, []);

    function getConstellationData(id) {
        //console.log('found constellation: ');
        //console.log(constellations.find(constellation => constellation.id === id));
        return constellations.find(constellation => constellation.id === id);
    }

    return(
        <>
            <h2>{data.name}</h2>
            <ConstellationContentContainer>
                <ArticleContainer>
                    <section>
                        <span>Longitude: {data.longitude}</span>
                        <span>Latitude: {data.latitude}</span>
                        <span>Magnitude: {data.magnitude}</span>
                        <span>Tipo: {data.category}</span>

                        <ItemMenuLink to="/constellations" state={getConstellationData(data.constellationID)}
                            onClick={() => setNavigationCountWrapper(1)}>
                            Constelação: {constellationName}
                        </ItemMenuLink>

                        <span>Natureza: {data.nature}</span>
                    </section>
                    <section>
                        {
                            data.description.map(paragraph => (
                                <p>{paragraph}</p>
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