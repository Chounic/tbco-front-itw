/**
 * 5. Holy Grail
 *
 * We are in 2021.
 * Using CSS, how would you build the layout seen in the holy-grail.png picture.
 * Feel free to update the html structure and add classNames in this document if needed.
 */

import { Fragment } from "react";
import css from "./style.module.css";
import src from "./holy-grail.png";

const HolyGrail = () => {
  return (
    <Fragment>
      <h1>Holy Grail</h1>
      <img src={src} alt={"Holy Grail"} className={css.picture} />

      <div className={css.wrapper} style={{  backgroundColor: '#83CAFF', textTransform: "uppercase", textAlign: "center", display: "flex", flexDirection: "column", border: "4px black solid", paddingTop: 1}} >
        <header style={{fontSize: '3rem', fontWeight: 400, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <div>Header</div>
        </header>
        <main style={{ padding: 0, display: "flex", flex: 4, justifyContent: "", borderTop: "4px black solid", borderBottom: "4px black solid" }}>

          <div style={{  fontWeight: 600, paddingTop: 0, backgroundColor: "#CC99CC", flex: 1, fontSize: 14  }}>

            <p style={{ margin: 0 }}>Menu</p>

            <nav style={{ textAlign: "left", marginLeft: 3 }}>
              <div>item 1</div>
              <div>item 2</div>
              <div>item 3</div>
              <div>item 4</div>
              <div>item 5</div>
            </nav>

          </div>
          <section style={{ flex: 3, borderLeft: "4px black solid", borderRight: "4px black solid", backgroundColor: "#FFCCCC"}} >

            <div style={{ margin: 0, padding: 0, fontSize: '2rem', fontWeight: 400}}>CONTENT</div>

            <p style={{  textTransform: "none", textAlign: "left", fontSize: '0.6rem', fontWeight: 500, padding: 5, marginTop: 0}}>Lorem ipsum dolor sit amet. Eos ipsum autem vel dolorem nisi hic consequuntur placeat et totam nesciunt sed dolorem incidunt rem fugit nihil. Vel accusantium optio eum autem rerum et sequi quos et dolore porro ea doloribus blanditiis.</p>


          </section>
          <aside style={{ backgroundColor: "#CC99CC", flex: 1, fontSize: '2.2rem', fontWeight: 400}}>

            <div>ad</div>
            <div>ad</div>

          </aside>
        </main>
        <footer  style={{fontSize: '2.8rem', fontWeight: 400, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Footer</footer>
      </div>
    </Fragment>
  );
};

export default HolyGrail;
