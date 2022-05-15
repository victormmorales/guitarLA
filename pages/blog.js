import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

const Blog = ({ entradas }) => {
  return (
    <div>
      <Layout pagina="Blog">
        <main className="contenedor"></main>
        <ListadoBlog entradas={entradas} />
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=create_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas,
    },
  };
}

// export async function getServerSideProps() {
//   const url = "http://localhost:1337/blogs";
//   const respuesta = await fetch(url);
//   const entradas = await respuesta.json();

//   return {
//     props: {
//       entradas,
//     },
//   };
// }

export default Blog;
