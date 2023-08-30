import { ArticleContainer } from "../../styles/global"

export default function Constellation({ backFunction }) {
    return(
        <>
            <h2>Nome da Constelação</h2>
            <ArticleContainer>
                <p>Who moved my cheese when the cheese comes out everybody's happy goat. Mascarpone port-salut who moved my cheese stilton dolcelatte cream cheese bocconcini smelly cheese. Cheesy feet brie taleggio cheeseburger the big cheese jarlsberg cheese and wine cheese and wine. Cut the cheese croque monsieur feta fromage.</p>
                <p>Blue castello cheese on toast camembert de normandie. Paneer ricotta dolcelatte cauliflower cheese macaroni cheese everyone loves st. agur blue cheese fondue. Everyone loves stinking bishop cheese and wine jarlsberg rubber cheese mozzarella taleggio cheese and wine. Everyone loves ricotta emmental swiss smelly cheese the big cheese who moved my cheese halloumi. Monterey jack goat.</p>
                <p>Croque monsieur cow hard cheese. Say cheese squirty cheese smelly cheese cheese on toast mozzarella stilton croque monsieur hard cheese. Mascarpone taleggio cheese and wine cauliflower cheese cheesy feet hard cheese danish fontina taleggio. Smelly cheese say cheese.</p>
                <p>Chalk and cheese camembert de normandie squirty cheese. Cottage cheese squirty cheese ricotta jarlsberg cheeseburger fromage frais stinking bishop everyone loves. Melted cheese babybel cut the cheese bocconcini mascarpone fromage frais mozzarella fromage frais. Caerphilly taleggio stinking bishop stinking bishop blue castello squirty cheese.</p>
                <p>Dolcelatte cheese on toast stinking bishop. Who moved my cheese fromage pepper jack stilton brie cauliflower cheese manchego cottage cheese. Swiss gouda jarlsberg smelly cheese taleggio stinking bishop stinking bishop swiss. Bocconcini cheesy grin cheeseburger cottage cheese stinking bishop cow cheddar queso. Cheese slices stilton.</p>
            </ArticleContainer>
            <button onClick={backFunction}>Voltar</button>
        </>
    )
}