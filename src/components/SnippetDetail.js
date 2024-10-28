import React from "react";
import { useDispatch } from "react-redux";
import { deleteSnippet } from '../redux/snippetAction';

const SnippetDetail = ({snippet}) => {   
    const dispatch = useDispatch();

    return (                            
        <div>
            <h1>{snippet.text}</h1>
            {/* <button onClick={() => dispatch(deleteSnippet(snippet.id))}>Eliminar</button> */}
        </div>
    )
}

export default SnippetDetail






