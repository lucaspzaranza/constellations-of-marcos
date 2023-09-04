import { useNavigate } from "react-router-dom";
import { ArticleButton, IconLinkDiv } from "../../styles/global";
import duck from '../../assets/pics/duck.jpg';
import ZazaArticle from './styles';
import IconLink from '../../components/IconLink';

export default function AboutMe() {
    const navigation = useNavigate();

    function backFunction() {
        navigation("/");
    }

    return (
        <>
            <h2>Quem sou eu?</h2>
            <ZazaArticle>
                <img src={duck} alt="duck"/>
                <p>
                    Programador, músico e astrólogo. Como eu faço tudo isso? Seguindo o exemplo de um pato,
                    que nada, anda e voa.
                </p>

                <IconLinkDiv>
                    <IconLink icon="instagram" path="https://www.instagram.com/lucaspzaranza/"/>
                    <IconLink icon="linkedin" path="https://www.linkedin.com/in/lucas-zaranza-74157a60/"/>
                </IconLinkDiv>
            </ZazaArticle>
            <ArticleButton onClick={backFunction}>
                Voltar
            </ArticleButton>
        </>
    )
}