import React, { useState } from 'react';
import "../App.css"

function StudentMarksSheet() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState("");
  const [rollnumber, setRollNumber] = useState();
  const [htmlTestResult, setHtmlTestResult] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddStudent = () => {
    if (!name || !fatherName || !rollnumber || !htmlTestResult) {
      alert("Kindly Fillup the fields!");
      return;
    }
    const newStudent = { name, fatherName, rollnumber, htmlTestResult };
    setStudents([...students, newStudent]);
    setName('');
    setFatherName('');
    setRollNumber('');
    setHtmlTestResult('');
  };

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollnumber.toString().includes(searchTerm) ||
      student.htmlTestResult.toString().includes(searchTerm)
    );
  });

  return (
    <div className="maindiv">
      <div className="head">
        <h1>Student Marks Sheet</h1>
      </div>
      <div className="container">
        <form>
          <label>
            Name:
            <input
              required
              placeholder='Student-Name'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Father Name:
            <input
              type="text"
              placeholder='Father-Name'
              required
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Roll Number:
            <input
              type="number"
              placeholder='0'
              value={rollnumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            HTML Quize Marks:
            <input
              type="number"
              placeholder='0'
              required
              value={htmlTestResult}
              onChange={(e) => setHtmlTestResult(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <button onClick={handleAddStudent} className="add-button">
            Add Student
          </button>
        </form>
        <br />
        <label>
          Search:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field"
          />
        </label>
      </div>
      <div className="student-list">
        <h2>Student Marks</h2>
        {filteredStudents.length === 0 ? (
          <p>Student Data does'nt Exist! <span> </span>"{searchTerm}"</p>
        ) : (
          <div className="grid-container">
            {filteredStudents.map((student, index) => (
              <div key={index} className="grid-item">
                <div className="student-card">
                  <h3>Student Name: <span className='studentName'>{student.name}</span></h3>
                  <p>Father: <span className='fatherName'>{student.fatherName}</span></p>
                  <p>Roll Number: <span className='rollNumber'>{student.rollnumber}</span></p>
                  <p >HTML Quiz Marks: <span className='quiz'>{student.htmlTestResult}</span></p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentMarksSheet;