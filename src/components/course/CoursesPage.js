// Container component
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
    // 1. Constructor will initialize state and call bind functions
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    // 2. Child functions
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    // 3. Render function, should call a child component
    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={courses}/>
            </div>
        );
    }
}

// 4. PropTypes
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// 5. Redux connect
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses // this comes from root reducer reducers/index.js line 5
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(
    mapStateToProps,    // specifies the state you want to expose to the component
    mapDispatchToProps  // specifies the actions you want to expose
)(CoursesPage);


