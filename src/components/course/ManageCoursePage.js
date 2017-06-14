import React                           from 'react';
import { PropTypes }                   from 'react';
import { bindActionCreators }          from 'redux';
import { connect }                     from 'react-redux';
import toastr                          from 'toastr';

import { authorsFormattedForDropDown } from '../../selectors/selectors';
import * as courseActions              from '../../actions/courseActions';
import CourseForm                      from './CourseForm';

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
                         course: Object.assign({}, this.props.course),
                         errors: {}, 
                         saving: false
                     };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse        = this.saveCourse.bind(this);
    }

    // This is called any time props have changed or React thinks *might* have changed...

    componentWillReceiveProps(nextProps) {
        
        if (this.props.course.id != nextProps.course.id) {

            // This is necessary to populate the form when an existing course is loaded directly.
            // i.e. When the form is reloaded instead of directly navigated to.
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }
    
    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    courseFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.course.title.length < 5) {
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    saveCourse(event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
                          .then(() => this.redirect())
                          .catch((error) => { 
                              toastr.error(error);
                              this.setState({ saving: false });
                          });
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Course Saved');
        this.context.router.push('/courses');
    }

    render() {
        return (
            <div>
                <CourseForm course={this.state.course}
                            errors={this.state.errors} 
                            saving={this.state.saving}
                            allAuthors={this.props.authors}
                            onChange={this.updateCourseState}
                            onSave={this.saveCourse}
                />
            </div>
        );
    }
}

// Pull in React Router context so the router is available on 'this.context.router'.

ManageCoursePage.contextTypes = {
                                    router: PropTypes.object
                                };

ManageCoursePage.propTypes = {
                                 course:  PropTypes.object.isRequired, 
                                 authors: PropTypes.array.isRequired, 
                                 actions: PropTypes.object.isRequired
                             };

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course) { 
        // 'filter' returns an array, so just return the first element.
        // Of course, if there was more than one element in the array, 
        // then you might want to raise an exception as that would 
        // indicate a problem with multiple ids present.
        return course[0];
    }
    return null;
}

function mapStateToProps(state, ownProps) {

    let course = {
                     id:        '', 
                     watchHref: '', 
                     title:     '', 
                     authorId:  '', 
                     length:    '', 
                     category:  ''
                 };

    // courseId taken from the path '/course/:id'    

    const courseId = ownProps.params.id;

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    return {
               course:  course, 
               authors: authorsFormattedForDropDown(state.authors)
           };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(courseActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);