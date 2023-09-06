import { useMemo } from "react";
import { ArticleContainer, ArticleButton, ConstellationContentContainer, ItemMenuLink } from "../../styles/global";
import fixedStars from "../../data/fixedStars";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from 'uuid';

export default function Constellation({ backFunction, data, setNavigationCountWrapper }) {
    const location = useLocation();
    const constellation = location.state === null ? data : location.state;

    const stars = useMemo(() => fixedStars.filter(
        star => star.constellationID === constellation.id), [fixedStars]);

    return(
        <>
            <h2>{constellation.name}</h2>
            <ConstellationContentContainer>
                <ArticleContainer>
                    <section>
                        {
                            constellation.description.map(paragraph => (
                                <p key={uuid()}>
                                    {paragraph}
                                </p>
                            ))
                        }
                    </section>
                    <section>
                        <h4>Estrelas Fixas dessa Constelação:</h4>
                        {
                            stars.map(star => (
                                <ItemMenuLink key={uuid()} to="/fixedstars" state={star} onClick={() => setNavigationCountWrapper(1)}>
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