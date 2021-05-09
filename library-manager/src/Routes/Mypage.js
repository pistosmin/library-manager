import React, { useState, useEffect } from "react";

import firebase from "firebase/app";
import { auth, firestore } from "Components/firebase.config";
import Navigation from "Components/Navigation";
import PersonalInfo from "Components/PersonalInfo";

function Mypage() {
  const [myInfo, setUserInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const userID = "randomUser01";

  const fetchUserInfo = async (userID) => {
    const response = firestore.collection("users");
    //.where("userID", "==", userID);

    const data = await response.get();
    setLoading(false);
    // setUserInfo([...myInfo, data.docs[0].data()]);
    const userInfo = data.docs.map((info) => ({
      id: info.id,
      ...info.data(),
    }));

    setUserInfo(userInfo);

    // data.docs.forEach((item) => {
    //   setUserInfo([...myInfo, item.data()]);
    // });
  };

  useEffect(() => {
    fetchUserInfo(userID);
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Mypage</h1>
      <div>
        {isLoading
          ? "Loading..."
          : myInfo.map((myInfo) => (
              <PersonalInfo
                key={myInfo.userID}
                name={myInfo.name}
                nickname={myInfo.nickname}
                userID={myInfo.userID}
                favoriteGenre={myInfo.favoriteGenre}
              />
            ))}
      </div>
    </div>
  );
}

export default Mypage;
