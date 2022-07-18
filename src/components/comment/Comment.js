import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.comment = this.props.item;
    }



    render() {
        return (
            <div>
                ID:{this.comment.id} - Name:{this.comment.name}
            </div>
        );
    }
}

export default Comment;