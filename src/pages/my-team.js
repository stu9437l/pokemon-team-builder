import React, { useEffect, useState } from "react";
import Header from "../component/header";
import Breadcrumb from "../component/breadcrumb";
import Pokemon from "../component/pokemon-card";
import { Link, useFetcher } from "react-router-dom";
import { Axios } from "../axios";
import Loading from "../component/loading";

const MyTeam = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const teams = JSON.parse(localStorage.getItem("my-team"));
    const GetTeamData = async () => {
      try {
        // eslint-disable-next-line array-callback-return
        const allData = teams.map(async (id) => {
          const response = await Axios.get(`/pokemon/${id}`);
          return response.data;
        });
        const responses = await Promise.all(allData);
        setData(responses);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    GetTeamData();
  }, []);

  const removeId = (id) => {
    const updatedTeam = data.filter((item) => item.id !== id);
    setData(updatedTeam);
    localStorage.setItem("my-team", JSON.stringify(updatedTeam));
  };

  return (
    <div className="container">
      <Breadcrumb name={"My Team"} />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="team-section section-layout">
          <div className="row g-3">
            {data.length ? (
              data?.map((pokemon, index) => {
                return (
                  <Pokemon
                    name={pokemon.name}
                    image={pokemon.image}
                    id={pokemon.id}
                    types={pokemon.types}
                    index={index}
                    color={pokemon.color}
                    idAddButton={false}
                    isRemoveButton={true}
                    removeId={removeId}
                  />
                );
              })
            ) : (
              <div className="no-data">
                <img
                  className=""
                  src="https://static.thenounproject.com/png/3036654-200.png"
                />
                <h5>No Pokemon on your team</h5>
                <Link to="/" className="btn btn-primary">
                  Go to homepage
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default MyTeam;
