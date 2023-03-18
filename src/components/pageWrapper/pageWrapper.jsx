import React, { useState, useMemo} from "react";

import { StyledWrapper } from "./styled";
import Header from "../layout/header/header";
import CardList from "../Cards/CardList/cardList";
import CardPopup from "../popups/CardPopup/cardPopup";
import NothingFound from "../Cards/NothingFound/nothingFound";

function PageWrapper() {

    const [isShow, setIsShow] = useState(false);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [search, setSearch] = useState('');
    const [todos, setTodos] = useState([]);

    const searchedTodos = useMemo(() => {
        return todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, todos]);
    
      const removeTodo = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id));
      };

      const createTask = (newTodo) => {
        setTodos([...todos, newTodo]);
        setIsShow(false);
      }

    return (
        <StyledWrapper>
            <Header
                setIsShow={setIsShow}
                search={search}
                setSearch={setSearch}
            />
            {searchedTodos.length ?
                <CardList 
                todos={searchedTodos}
                setTodos={setTodos}
                removeTodo={removeTodo}
                setIsShowEdit={setIsShowEdit}
                isShowEdit={isShowEdit}
            /> 
            : <NothingFound />

            }
            <CardPopup 
                isShow={isShow} 
                setIsShow={setIsShow}
                setTodos={setTodos}
                todos={todos}
                create={createTask}
            />
            
        </StyledWrapper>
    );
}

export default PageWrapper;