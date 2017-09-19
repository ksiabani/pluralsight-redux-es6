// Container component
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    // 1. Constructor will initialize state and call bind functions
    constructor(props, context) {
        super(props, context);
    }

    // 2. Child functions
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    // 3. Render function, should call a child component
    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
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


