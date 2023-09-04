import StyledSearchInput, { InputContainer } from "./styles";
import magnifier from '../../assets/svg/zoom.svg'

export default function SearchInput({ placeholder, filterFunction }) {
    return (
        <InputContainer>
            <StyledSearchInput placeholder={placeholder} onInput={filterFunction}/>
            <img src={magnifier} alt="search"/>
        </InputContainer>
    )
}