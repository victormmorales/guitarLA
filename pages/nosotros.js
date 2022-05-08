import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <div>
      <Layout pagina="Nosotros">
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image
              src="/img/nosotros.jpg"
              layout="responsive"
              width={600}
              height={450}
              alt="sobre nosotros"
            />
            <div>
              <p>
                Sed erat arcu, commodo sit amet rutrum at, aliquet fringilla mi.
                Sed eget justo eu purus tristique lacinia. Aenean egestas
                pretium porta. Aenean a tortor eu magna dignissim interdum in eu
                nulla. Aliquam mauris dolor, iaculis quis mauris eget, faucibus
                lobortis turpis. Vivamus vel iaculis dui. Sed sollicitudin
                malesuada arcu, id luctus sapien mollis et.
              </p>
              <p>
                Sed erat arcu, commodo sit amet rutrum at, aliquet fringilla mi.
                Sed eget justo eu purus tristique lacinia. Aenean egestas
                pretium porta. Aenean a tortor eu magna dignissim interdum in eu
                nulla. Aliquam mauris dolor, iaculis quis mauris eget, faucibus
                lobortis turpis. Vivamus vel iaculis dui. Sed sollicitudin
                malesuada arcu, id luctus sapien mollis et. Mauris aliquet
                vulputate ante non ultricies. Curabitur id consectetur velit.
                Duis luctus sagittis nulla, eget elementum ipsum lobortis id.
                Quisque pellentesque orci vitae sem ullamcorper.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Nosotros;
