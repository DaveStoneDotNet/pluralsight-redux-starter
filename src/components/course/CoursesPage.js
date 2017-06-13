import React                  from 'react';
import { PropTypes }          from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { browserHistory }     from 'react-router';

import * as courseActions     from '../../actions/courseActions';
import CourseList             from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToCoursePage = this.redirectToCoursePage.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const { courses: courses } = this.props;
        return (
           <div>
                <h1>Courses</h1>
                <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToCoursePage} />
                <CourseList courses={courses} />
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