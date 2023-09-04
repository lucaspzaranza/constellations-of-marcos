import { useNavigate } from 'react-router-dom';
import marcos from '../../assets/pics/marcos.jpeg';
import MarcosArticle from './styles';
import { ArticleButton, IconLinkDiv } from '../../styles/global';
import IconLink from '../../components/IconLink';

export default function AboutMarcos() {
    const navigation = useNavigate();

    function backFunction() {
        navigation("/");
    }

    return (
        <>
            <h2>Quem é Marcos Monteiro?</h2>
            <MarcosArticle>
                <img src={marcos} alt="astrologer"/>
                <p>
                    O Faixa preta da Astrologia.
                </p>

                <IconLinkDiv>
                    <IconLink icon="instagram" path="https://www.instagram.com/horary_astrology/"/>
                    <IconLink icon="youtube" path="https://www.youtube.com/@marcos_monteiro"/>
                </IconLinkDiv>

            </MarcosArticle>
            <ArticleButton onClick={backFunction}>
                Voltar
            </ArticleButton>
        </>
    )
}