import React         from 'react';
import { PropTypes } from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Header Here</h1>
                { this.props.children }
            </div>
        );
    }
}

App.propTypes = {
                    children: PropTypes.object.isRequired
                };

export default App;