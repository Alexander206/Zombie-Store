/* Stilos */
import '../styles/main.scss';

/* Components */
import HEADER from '../components/containers/Header';
import ASIDE_CATEGORIES from '../components/containers/Aside_Categories';

function App() {
  return (
    <>
      <HEADER />
      <main data-bs-spy='scroll' data-bs-target='#navbar-example'>
        <ASIDE_CATEGORIES id='list-example' className='list-group' />

        <section
          data-bs-spy='scroll'
          data-bs-target='#list-example'
          data-bs-smooth-scroll='true'
          className='nav nav-tabs scrollspy-example secction_content'
          tabIndex='0'
          role='tablist'>
          <article id='list-item-1'>
            <h4>Item 1</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, labore accusamus accusantium esse culpa amet quos
              soluta! Totam exercitationem nihil, quo assumenda deserunt odit dolore obcaecati officia, maiores nam quas.
            </p>
          </article>

          <article id='list-item-2'>
            <h4>Item 2</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, labore accusamus accusantium esse culpa amet quos
              soluta! Totam exercitationem nihil, quo assumenda deserunt odit dolore obcaecati officia, maiores nam quas.
            </p>
          </article>

          <article id='list-item-3'>
            <h4>Item 3</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, labore accusamus accusantium esse culpa amet quos
              soluta! Totam exercitationem nihil, quo assumenda deserunt odit dolore obcaecati officia, maiores nam quas.
            </p>
          </article>

          <article id='list-item-4'>
            <h4>Item 4</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, labore accusamus accusantium esse culpa amet quos
              soluta! Totam exercitationem nihil, quo assumenda deserunt odit dolore obcaecati officia, maiores nam quas.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
