import React, { Component } from 'react';
import Form from './Form';
import Table from './Table';

class TablePage extends Component {
  
    state = {
        characters: []
    };
    
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });

    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">

                <h3>Add New</h3>
                <script>console.console.log("qweqweqe");
                </script>
                <Form handleSubmit={this.handleSubmit} />
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default TablePage;