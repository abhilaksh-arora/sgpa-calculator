// src/components/CourseInput.js
import React from 'react';

const CourseInput = ({ index, course, handleCourseChange }) => {
  return (
    <div className="input1">
      <input
        type="text"
        name="courseName"
        value={course.courseName}
        onChange={(e) => handleCourseChange(index, e)}
        placeholder={`Subject ${index + 1}`}
        readOnly
      />
      <input
        type="number"
        name="credits"
        value={course.credits}
        onChange={(e) => handleCourseChange(index, e)}
        placeholder="Credits"
        min="0"
      />
      <input
        type="text"
        name="grade"
        value={course.grade}
        onChange={(e) => handleCourseChange(index, e)}
        placeholder="Grade (e.g., A+)"
      />
    </div>
  );
};

export default CourseInput;
