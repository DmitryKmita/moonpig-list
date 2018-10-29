import React from 'react';
import { Badge } from 'react-bootstrap';

class Tag extends React.Component {
    render()
    {
        return (
            <Badge className="c-tag">
                {this.props.name}
            </Badge>
        );
    }
}

export default Tag;