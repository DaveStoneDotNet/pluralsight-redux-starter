import React         from 'react';
import { PropTypes } from 'react';

class LoadingDots extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                         frame:     1, 
                         isMounted: false
                     };
    }

    componentDidMount() {
        this.setState({ isMounted: true });
        this.interval = setInterval(() => {
            if (this.state.isMounted) {
                /* eslint react/no-did-mount-set-state: 0 */
                this.setState({ frame: this.state.frame + 1 });
            }
        }, this.props.interval);
    }

    componentWillUnmount() { 

        if (this.state.isMounted) {
            this.setState({ isMounted: false });        
        }
        
        clearInterval(this.interval);

        // this.interval && clearInterval(this.interval);
        // this.interval = false;
    }

    render() {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return <span {...this.props}>{text}&nbsp;</span>;
    }
}

LoadingDots.defaultProps = {
                               interval: 300, 
                               dots:     3
                           };
                           
LoadingDots.propTypes = {
                            interval: PropTypes.number, 
                            dots:     PropTypes.number
                        };

export default LoadingDots;