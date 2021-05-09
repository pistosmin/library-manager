import React from "react";
import PropTypes from "prop-types";

function PersonalInfo({ name, nickname, userID, favoriteGenre }) {
  return (
    <div>
      <h5>{name}</h5>
      <h5>{nickname}</h5>
      <h5>{userID}</h5>
      <h5>{favoriteGenre}</h5>
    </div>
  );
}

PersonalInfo.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   nickname: PropTypes.string.isRequired,
  //   userID: PropTypes.string.isRequired,
  //   favoriteGenre: PropTypes.array,
};

export default PersonalInfo;
