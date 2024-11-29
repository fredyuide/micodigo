import React from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  let students = [];

  const addStudent = (student) => {
    students.push(student);
    renderTable();
  };

  const renderTable = () => {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      const emailCell = document.createElement("td");
      const ageCell = document.createElement("td");
      const careerCell = document.createElement("td");

      nameCell.textContent = student.name;
      emailCell.textContent = student.email;
      ageCell.textContent = student.age;
      careerCell.textContent = student.career;

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(ageCell);
      row.appendChild(careerCell);

      tableBody.appendChild(row);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Registro de Estudiantes</h1>
        <StudentForm addStudent={addStudent} />
        <StudentTable />
      </header>
    </div>
  );
}

export default App;
