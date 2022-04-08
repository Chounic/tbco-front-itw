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

      <div className={css.wrapper} >
        <header className={css.headerFooter} >
          <div>Header</div>
        </header>
        <main className={css.main}>

          <div className={css.menu}>

            <p className={css.menuTitle}>Menu</p>

            <nav className={css.nav}>
              <div>item 1</div>
              <div>item 2</div>
              <div>item 3</div>
              <div>item 4</div>
              <div>item 5</div>
            </nav>

          </div>
          <section className={css.section}>

            <div className={css.sectionTitle}>CONTENT</div>

            <p className={css.sectionContent}>Lorem ipsum dolor sit amet. Eos ipsum autem vel dolorem nisi hic consequuntur placeat et totam nesciunt sed dolorem incidunt rem fugit nihil. Vel accusantium optio eum autem rerum et sequi quos et dolore porro ea doloribus blanditiis.</p>


          </section>
          <aside className={css.aside}>

            <div>ad</div>
            <div>ad</div>

          </aside>
        </main>
        <footer className={css.headerFooter}>Footer</footer>
      </div>
    </Fragment>
  );
};

export default HolyGrail;
