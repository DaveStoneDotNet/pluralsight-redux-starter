import React                  from 'react';
import { PropTypes }          from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as courseActions     from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
                         course: { title: '' }
                     };
        
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave   = this.onClickSave.bind(this);
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }    
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }    
    render() {
        return (
           <div>
                <h1>Courses</h1>
                { this.props.courses.map(this.courseRow) }
                <h2>Add Course</h2>
                <input type="text" value={ this.state.course.title } onChange={ this.onTitleChange } />
                <input type="submit" value="Save" onClick={ this.onClickSave } />
            </div> 
        );
    }
}

CoursesPage.propTypes = {
                             actions: PropTypes.object.isRequired, 
                             courses: PropTypes.array.isRequired 
                         };

// The 'courses' property name on the 'state' parameter is defined in the 'reducers/index.js' file. 
// For example, you could have named the property 'monkey' and it would be referenced as 'state.monkey' instead of 'state.courses'.
// Similarly, you could call it 'courseReducer', but then you would have to reference it as 'state.courseReducer', which could be considered awkward.

function mapStateToProps(state, ownProps) {
    return {
               courses: state.courses
           };
}

function mapDispatchToProps(dispatch) {
    return {
               actions: bindActionCreators(courseActions, dispatch)
           };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);