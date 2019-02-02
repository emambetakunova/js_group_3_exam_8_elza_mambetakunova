import React, {Component} from 'react';
import {CATEGORIES} from "../../constans";

class QuoteForm extends Component {

    constructor(props) {
        super(props);
        if (props.posts) {
            this.state = {...props.posts};
        } else {
            this.state = {
                quotes: {
                    quoteText: '',
                    category: Object.keys(CATEGORIES)[0],
                    author: ''
                }

            };
        }
    }

    valueChanged = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit({...this.state});
    };

    render() {
        return (
            <form className="QuoteForm" onSubmit={this.submitHandler}>
                <p>Category: </p>
                <select name="category" onChange={this.valueChanged} value={this.state.category}>
                    {Object.keys(CATEGORIES).map(categoryId => (
                        <option key={categoryId} value={categoryId}>{CATEGORIES[categoryId]}</option>
                    ))}
                </select>
                <p>Author: </p>
                <input type="text" name="author" placeholder="Author" value={this.state.author}
                       onChange={this.valueChanged}/>
                <p>Quote text: </p>
                <textarea name="quoteText" placeholder="Quote text" value={this.state.description}
                          onChange={this.valueChanged}/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export default QuoteForm;