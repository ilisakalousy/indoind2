import React from "react";

import { 
    SearchWrapper, 
    StyledInput,
    StyledLoupe,
} from "./styled";

function SearchInput({ search, setSearch }) {
    return (
        <SearchWrapper>
            <StyledLoupe />
            <StyledInput 
                placeholder="Search for task..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </SearchWrapper>
    );
}

export default SearchInput;