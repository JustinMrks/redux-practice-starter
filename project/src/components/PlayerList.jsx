import React, { useEffect } from "react";
import PlayerCard from "./PlayerCard";
import { connect } from "react-redux";
import { fetchPlayers } from "../actions";

const PlayerList = (props) => {
  useEffect(() => {
    props.fetchPlayers();
  }, []);

  return (
    <div>
      Player List
      {props.players.map((player) => {
        <PlayerCard player={player} key={player.id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { fetchPlayers })(PlayerList);
