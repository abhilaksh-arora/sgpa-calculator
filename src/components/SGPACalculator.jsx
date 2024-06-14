// src/components/SGPACalculator.js
import React, { useState } from "react";
import CourseInput from "./CourseInput";

const gradePoints = {
  "A+": 10,
  A: 9,
  "B+": 8,
  B: 7,
  "C+": 6,
  C: 5,
  D: 4,
  E: 0,
};

const SGPACalculator = () => {
  const [courses, setCourses] = useState([
    { courseName: "Subject 1", credits: "", grade: "" },
  ]);
  const [currentCGPA, setCurrentCGPA] = useState("");
  const [completedCredits, setCompletedCredits] = useState("");

  const handleCourseChange = (index, event) => {
    const newCourses = [...courses];
    newCourses[index][event.target.name] = event.target.value;
    setCourses(newCourses);
  };

  const handleAddCourse = () => {
    const newCourseNumber = courses.length + 1;
    setCourses([
      ...courses,
      { courseName: `Subject ${newCourseNumber}`, credits: "", grade: "" },
    ]);
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach((course) => {
      const gradePoint = gradePoints[course.grade] || 0;
      totalCredits += parseFloat(course.credits || 0);
      totalPoints += parseFloat(course.credits || 0) * gradePoint;
    });
    return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
  };

  const calculateNewCGPA = () => {
    const sgpa = parseFloat(calculateSGPA());
    const currentCGPAFloat = parseFloat(currentCGPA || 0);
    return ((sgpa + currentCGPAFloat) / 2).toFixed(2);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>SGPA Calculator</h1>
        {courses.map((course, index) => (
          <div className="input" key={index}>
            <CourseInput
              index={index}
              course={course}
              handleCourseChange={handleCourseChange}
            />
          </div>
        ))}
        <button onClick={handleAddCourse}>Add Course</button>
        <p className="result">
          SGPA: <span id="result">{calculateSGPA()}</span>
        </p>
        <div className="input">
          <input
            type="number"
            placeholder="Current CGPA"
            value={currentCGPA}
            onChange={(e) => setCurrentCGPA(e.target.value)}
            step="0.01"
          />
        </div>
        <p className="result">
          New CGPA: <span id="result">{calculateNewCGPA()}</span>
        </p>
      </div>
    </div>
  );
};

export default SGPACalculator;
