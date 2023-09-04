import { useEffect } from "react"
import { ConstellationContentContainer, ArticleContainer, ArticleButton, ItemMenuLink } from "../../styles/global"

export default function FixedStar({ backFunction, data }) {

    useEffect(() => {
        console.log('data');
        console.log(data);
    }, [])

    return(
        <>
            <h2>Nome da Estrela Fixa</h2>
            <ConstellationContentContainer>
                <ArticleContainer>
                    <section>
                        <span>Longitude: 05º48' de Libra</span>
                        <span>Latitude: 02º Norte</span>
                        <span>Magnitude: 4,6</span>
                        <span>Tipo: Nebulosa</span>
                        <ItemMenuLink to="/constellations">Constelação: Virgo</ItemMenuLink>
                        <span>Natureza: Mercúrio</span>
                    </section>
                    <section>
                        <p>Who moved my cheese when the cheese comes out everybody's happy goat. Mascarpone port-salut who moved my cheese stilton dolcelatte cream cheese bocconcini smelly cheese. Cheesy feet brie taleggio cheeseburger the big cheese jarlsberg cheese and wine cheese and wine. Cut the cheese croque monsieur feta fromage.</p>
                        <p>Blue castello cheese on toast camembert de normandie. Paneer ricotta dolcelatte cauliflower cheese macaroni cheese everyone loves st. agur blue cheese fondue. Everyone loves stinking bishop cheese and wine jarlsberg rubber cheese mozzarella taleggio cheese and wine. Everyone loves ricotta emmental swiss smelly cheese the big cheese who moved my cheese halloumi. Monterey jack goat.</p>
                        <p>Croque monsieur cow hard cheese. Say cheese squirty cheese smelly cheese cheese on toast mozzarella stilton croque monsieur hard cheese. Mascarpone taleggio cheese and wine cauliflower cheese cheesy feet hard cheese danish fontina taleggio. Smelly cheese say cheese.</p>
                        <p>Chalk and cheese camembert de normandie squirty cheese. Cottage cheese squirty cheese ricotta jarlsberg cheeseburger fromage frais stinking bishop everyone loves. Melted cheese babybel cut the cheese bocconcini mascarpone fromage frais mozzarella fromage frais. Caerphilly taleggio stinking bishop stinking bishop blue castello squirty cheese.</p>
                    </section>
                </ArticleContainer>
                <ArticleButton onClick={backFunction}>
                    Voltar
                </ArticleButton>
            </ConstellationContentContainer>
        </>
    )
}