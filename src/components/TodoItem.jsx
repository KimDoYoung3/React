import React from "react";
import styled from "styled-components";

const Remove = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {        
        color: #ff6b6b;
    }
    display:none;
`;

const TodoItemBlock = styled.div`
    display:flex;
    align-items:center;
    padding-top:12px;
    padding-bottom:12px;
    &:hover {        
        ${Remove} {
            display:initial;
        }
    }
`;

function TodoItem() {

}

export default TodoItem;