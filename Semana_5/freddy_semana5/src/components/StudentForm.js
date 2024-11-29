import Input from "./Input";
import Button from "./Button";
import "../form.css";

function StudentForm({ addStudent }) {
  let name = "";
  let email = "";
  let age = "";
  let career = "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = { name, email, age, career };

    addStudent(student);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("career").value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Formulario de Registro</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <Input
          id="name"
          type="text"
          onChange={(e) => (name = e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <Input
          id="email"
          type="email"
          onChange={(e) => (email = e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Edad</label>
        <Input
          id="age"
          type="number"
          onChange={(e) => (age = e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="career">Carrera</label>
        <Input
          id="career"
          type="text"
          onChange={(e) => (career = e.target.value)}
          required
        />
      </div>

      <Button text="Registrar" />
    </form>
  );
}

export default StudentForm;
