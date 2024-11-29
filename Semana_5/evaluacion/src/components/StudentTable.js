import "../table.css";

function StudentTable() {
  return (
    <div className="table-container">
      <h2>Lista de Estudiantes</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody className="student-container" id="studentTableBody"></tbody>
      </table>
    </div>
  );
}

export default StudentTable;
