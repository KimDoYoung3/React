import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 500px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.05);
`;

function TodoTemplate( {child} ) {
    return (
        <TodoTemplateBlock>
            {child}
        </TodoTemplateBlock>
    )
}

export default TodoTemplate;