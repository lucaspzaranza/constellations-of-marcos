import { useNavigate } from "react-router-dom";
import { ArticleButton, IconLinkDiv } from "../../styles/global";
import duck from '../../assets/pics/duck.jpg';
import ZazaArticle from '../AboutMarcos/styles';

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
                    Programador, músico e astrólogo. Como eu faço tudo isso? Seguindo o exemplo do pato, que faz um pouco de tudo: nada, anda e voa.
                </p>

                <p>
                    Após fazer o curso das estrelas fixas ministrado pelo Marcos, percebi como era trabalhoso a forma de buscar o
                    significado astrológico das estrelas fixas para determinado mapa que eu estivesse analisando, tinha que ficar lendo as
                    transcrições do curso, procurando informações complementares em outros sites... então tive a ideia de transformar o conteúdo
                    num site em que eu pudesse consultar as estrelas e já obtivesse suas principais informações, seus significados de acordo
                    com o curso do Marcos, que filtrou, compilou o conteúdo e ensinou o que era mais importante para as estrelas e constelações.
                </p>

                <p>
                    Desenvolvi esse site pra facilitar a minha vida na hora de buscar esse conteúdo, e também pra praticar as tecnologias
                    que eu tenho estudado ultimamente, a stack do front-end com JavaScript, React, CSS, Styled Components, etc. O nome do site,
                    Constellation of Marcos, é uma brincadeira e trocadilho com um site que ele utilizou bastante como referência no seu curso, o
                    Constellation of Words. Falando nele, algumas informações das estrelas precisaram ser complementadas com informações desse site
                    citado, assim como do https://horoscopes.astro-seek.com/.
                </p>

                <p>
                    Eu tenho o Sol em Virgem, o Ascendente em Virgem, e Mercúrio, que é o regente do Ascendente e o planeta mais forte
                    do meu mapa em... Virgem. Em conjunção com o Sol, ambos na casa 12. Pra quem entende de Astrologia sabe o quanto isso evidencia as características
                    do signo de Virgem no meu mapa natal. Quer coisa mais virginiana que desenvolver seu próprio site pra otimizar o processo de
                    busca por determinado conteúdo?
                </p>

                <p>
                    Se você ficou interessado em conhecer ou contratar meus serviços como Astrólogo, fale comigo através do meu Instagram.
                    Caso tenha ficado interessado em conhecer ou contratar meus serviços como desenvolvedor, fale comigo através do meu Linkedin.
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