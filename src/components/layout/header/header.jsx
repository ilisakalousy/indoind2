import React from "react";

import { 
    StyledHeader,
    HeaderContent,
    AddingButton,
    StyledPlus
} from "./styled";

import SearchInput from "../search/search";

function Header({ setIsShow, search, setSearch }) {

    return (
        <StyledHeader>
            <HeaderContent>
                <SearchInput 
                    search={search}
                    setSearch={setSearch}
                />
                <AddingButton 
                    onClick={() => setIsShow(true)}
                >
                    <StyledPlus />
                </AddingButton>
            </HeaderContent>
        </StyledHeader>
    );
}

export default Header;