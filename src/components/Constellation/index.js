import { useEffect, useMemo } from "react";
import { ArticleContainer, ArticleButton, ConstellationContentContainer, ItemMenuLink } from "../../styles/global";
import fixedStars from "../../data/fixedStars";
import { useLocation } from "react-router-dom";

export default function Constellation({ backFunction, data, setNavigationCountWrapper }) {
    const location = useLocation();
    const constellation = location.state === null ? data : location.state;

    const stars = useMemo(() => fixedStars.filter(star => star.constellationID === constellation.id), [fixedStars]);

    useEffect(() => {
        //console.log('stars on this constellation');
        //console.log(stars);
        // console.log('Constellation data:');
        // console.log(location.state.data);
    }, []);

    return(
        <>
            <h2>{constellation.name}</h2>
            <ConstellationContentContainer>
                <ArticleContainer>
                    <section>
                        {
                            constellation.description.map(paragraph => (
                                <p>{paragraph}</p>
                            ))
                        }
                    </section>
                    <section>
                        <h4>Estrelas Fixas dessa Constelação:</h4>
                        {
                            stars.map(star => (
                                <ItemMenuLink to="/fixedstars" onClick={() => setNavigationCountWrapper(1)}>
                                    {star.name}
                                </ItemMenuLink>
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