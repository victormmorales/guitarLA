const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;

  return (
    <section>
      <div className="contenedor">
        <div>
          <h2>{titulo}</h2>
          <p>{contenido}</p>

          <a href="">Más información</a>
        </div>
      </div>
    </section>
  );
};

export default Curso;
