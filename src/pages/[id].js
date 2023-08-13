import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Axios } from "../axios";
import { Threedigit } from "../utils";
import Breadcrumb from "../component/breadcrumb";

const Detail = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getDetailData = async () => {
      try {
        const response = await Axios.get(`/pokemon/${id}`);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDetailData();
  }, [id]);

  const [seeMore, setSeeMore] = useState(false);
  const moves = seeMore ? data?.moves : data?.moves?.slice(0, 12);
  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  return (
    <div className="pokemon-detail">
      <div className="container">
        <Breadcrumb name={data.name} />
        <section className="profile-section section-layout">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h5 className="pokemon__identity">#{Threedigit(data.id)}</h5>
                <h3 className="pokemon__name mb-4">{data.name}</h3>
                <ul className="pokemon__type mb-5">
                  {data?.types?.map((type, index) => {
                    return (
                      <li key={index}>
                        <div className="pokemon__type-badge">
                          {type.type.name}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <h5 className="section__title">Pokemon Statistics</h5>
                <ul className="pokemon__stats">
                  {data?.stats?.map((stat, index) => {
                    return (
                      <li>
                        <div className="pokemon__stats-label">
                          {stat.stat.name}
                        </div>
                        <div className="progress">
                          <div
                            className={`progress-bar ${
                              stat.base_stat < 25
                                ? "bg-danger"
                                : stat.base_stat < 50
                                ? "bg-warning"
                                : stat.base_stat < 90
                                ? "bg-success"
                                : "bg-dark"
                            } `}
                            style={{ width: `${stat.base_stat}%` }}
                          ></div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-6">
                <img
                  className="pokemon__image"
                  src={data?.sprites?.front_default}
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section className="Evaluation-section section-layout">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="section__title">Moves</h5>
              <button
                className="btn btn-sm btn-primary"
                onClick={handleSeeMore}
              >
                {seeMore ? "Show Less" : "Show All"}
              </button>
            </div>
            <div className="row g-2">
              {moves?.map((move, index) => {
                return (
                  <div className="col-6 col-md-4 col-lg-3 col-xl-2" key={index}>
                    <div className="card p-2">
                      <div className="moves__count">{index + 1}</div>
                      <h5 className="moves__name">{move.move.name}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* <section className="moves-section section-layout">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                <div className="moves__count">1</div>
                <h5 className="moves__name">Moves Name</h5>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Detail;
