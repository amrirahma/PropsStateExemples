import React from 'react';
import { Button } from 'reactstrap';
function LearnProps(props) {
    console.log("props"+JSON.stringify(props))
    return (
        <div>
            <Button>{props.children}</Button> {props.name}
        </div>
    );
}

export default LearnProps;