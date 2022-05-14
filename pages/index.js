import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";

export default function Home({ guitarras, curso }) {
  console.log("CURSO =>", curso);

  return (
    <div>
      <Layout pagina="Inicio">
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <Listado guitarras={guitarras} />
        </main>

        <Curso curso={curso} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const urlCursos = `${process.env.API_URL}/cursos`;

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
  ]);

  const [guitarras, curso] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
    },
  };
}
