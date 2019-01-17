import React from 'react';
import '../../styles/ranking-table.css';

const RankingRiders = ({  }) => {
    return (
        <section class="main-ranking">
          <section class="rider-ranking header-ranking">
              <article class="row">
                <ul>
                  <li>POSICIÓN</li>
                  <li><a>PILOTO</a></li>
                  <li>MARCA</li>
                  <li>MODELO</li>
                  <li>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>
                </ul>
              </article>
            </section>
          <section class="rider-ranking">
            <article class="row nfl">
              <ul>
                <li>1</li>
                <li><a href="#">Eddev92</a></li>
                <li>DUCATI</li>
                <li>HYPERSTRADA 896</li>
                <li>ESTRELLAS</li>
              </ul>
              {/* <ul class="more-content">
                <li>Edward David Llanca Haro || 25 años</li>
              </ul> */}
            </article>
          </section>
          <section class="rider-ranking">
            <article class="row mlb">
              <ul>
                <li>2</li>
                <li><a href="#">Howard Llanca</a></li>
                <li>DUCATI</li>
                <li>SCRAMBLER ICON 821</li>
                <li>ESTRELLAS</li>
              </ul>
            </article>
          </section>
          <section class="rider-ranking">
            <article class="row pga">
              <ul>
                <li>3</li>
                <li><a href="#">Axel Marciano</a></li>
                <li>TREK</li>
                <li>(MODELO)</li>
                <li>ESTRELLAS</li>
              </ul>
            </article>
          </section>
          <section class="rider-ranking">
            <article class="row nhl">
              <ul>
                <li>4</li>
                <li><a href="#">Niña Marciano</a></li>
                <li>RONCO</li>
                <li>AGRESSOR 200</li>
                <li>ESTRELLAS</li>
              </ul>
            </article>
          </section>
        </section>
    )
};

export default RankingRiders;
