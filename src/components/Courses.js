import React from 'react';
import CourseDetail from './CourseDetail';
import LeftSide from './LeftSide';

const Courses = () => {
    return (
        <div className='gird grid-cols-6'>
            <div >
                <h3>left side</h3>
                <LeftSide></LeftSide>
            </div>
            <div >
                <h3> course content </h3>
                <CourseDetail></CourseDetail>


            </div>
        </div>
    );
};

export default Courses;