import React from "react";

const Loading = () => {
  const loadingCards = [];
  for (let i = 0; i < 12; i++) {
    loadingCards.push(
      <div className="col-6 col-lg-4 col-xl-3">
        <div className="pokemon-card" style={{ backgroundColor: `#f1f1f1` }}>
          <div className="pokemon__image">
            <div className="pokemon__image--default">
              <img scr="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCYkkcMByPS1APlagDXUTSWpoOnTh3qF_MoXDcf96DSSeROjFEikrOQd1y1pKRZtC1VU&usqp=CAU" />{" "}
            </div>
          </div>
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center">
              <div className="pokemon__identity text-light">####</div>
            </div>
            <h3 className="pokemon__name">Pokemon Nmae</h3>
            <div className="pokemon__type"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pokemon-list">
      <div className="row g-3">{loadingCards}</div>
    </div>
  );
};

export default Loading;
