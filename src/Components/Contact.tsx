import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Acá podrían integrar un envío real (API, EmailJS, etc.)
    console.log(form);
    setSent(true);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="container py-4" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Contacto</h2>
      {sent && <div className="alert alert-success">¡Mensaje enviado!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            name="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;