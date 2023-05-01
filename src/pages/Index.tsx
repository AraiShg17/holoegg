import styles from "../scss/page/Index.module.scss";

import image from "../assets/chara-egg.svg";

import Hungry from "../components/hungry/Hungry";
import Life from "../components/life/Life";

function Index() {
  return (
    <div className={styles.index}>
      <div>
        <time>14:48</time>
        <div>
          <Hungry value={5} />
          <Life value={11} />
        </div>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <button>Stats</button>
          </li>
          <li>
            <ul>
              <li>
                <button>Sports</button>
              </li>
            </ul>
            <button>Act</button>
          </li>
        </ul>
        <button>Live</button>
      </nav>
    </div>
  );
}

export default Index;
