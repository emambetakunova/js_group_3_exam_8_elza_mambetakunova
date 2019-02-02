import React, {Component} from 'react';


class CardQuote extends Component {

    render() {

        return (
            <div className="CardQuote">
                <p>{this.props.author}</p>
                <p>{this.props.quoteText}</p>
                <button onClick={this.props.edit}>Edit</button>
                {/*<button onClick={this.props.delete}>Delete</button>*/}
            </div>
        );
    }
}

export default CardQuote;