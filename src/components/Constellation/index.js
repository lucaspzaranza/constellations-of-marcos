import { useMemo } from "react";
import { ArticleContainer, ArticleButton, DetailsPageHeader2Container,
    ConstellationContentContainer, ItemMenuLink, HeaderContainer, ConstellationMenuStarLink } from "../../styles/global";
import fixedStars from "../../data/fixedStars";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import constellationSVG from "../../assets/svg/constellation.svg";
import constellationDarkSVG from "../../assets/svg/constellation-dark.svg";
import { useTheme } from "styled-components";
import dark from "../../styles/themes/dark";
import { Link } from "react-router-dom";

export default function Constellation({ backFunction, data, setNavigationCountWrapper }) {
    const theme = useTheme();
    const location = useLocation();
    const constellation = location.state === null ? data : location.state;

    const stars = useMemo(() => fixedStars.filter(
        star => star.constellationID === constellation.id), [fixedStars]);

    return(
        <>
            <DetailsPageHeader2Container>
                <img src={theme.background === dark.background ?
                    constellationSVG : constellationDarkSVG} alt="constellationSVG"/>
                {" " + constellation.name}
            </DetailsPageHeader2Container>
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
                        <h4>Estrelas Fixas relevantes dessa constelação:</h4>
                        {
                            stars.map(star => (
                                <ConstellationMenuStarLink key={uuid()} to="/fixedstars" state={star} onClick={() => setNavigationCountWrapper(1)}>
                                    {star.name}
                                </ConstellationMenuStarLink>
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