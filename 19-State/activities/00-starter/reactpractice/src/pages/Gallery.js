import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import LanguageContext from "../utils/languageContext"
import LanguageSelector from "../components/LanguageSelector";


function Gallery() {

  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [languageIndex, setLanguageIndex] = useState(0);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    API.getLanguagesList()
      .then(languages => {
        API.getUsersByLanguage(languages[0]).then((users) => {
          setUsers(users);
          setUser(users[0]);
        });
      })
      .catch(err => console.log(err));
  }

  function nextLanguage(languageIndex) {
    // Ensure that the language index stays within our range of languages
    if (languageIndex >= languages.length) {
      languageIndex = 0;
    }
    loadUsers(languages[languageIndex]);

    setLanguage(languages[languageIndex])
    setLanguageIndex(languageIndex)
  }

  function previousLanguage(languageIndex) {
    // Ensure that the language index stays within our range of languages
    if (languageIndex < 0) {
      languageIndex = languages.length - 1;
    }
    loadUsers(languages[languageIndex]);
    
    setLanguage(languages[languageIndex])
    setLanguageIndex(languageIndex)
  }

  function handleLanguageBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newLanguageIndex = languageIndex + 1;
      nextLanguage(newLanguageIndex);
    } else {
      const newLanguageIndex = languageIndex - 1;
      previousLanguage(newLanguageIndex);
    }
  };


    
  function capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= users.length) {
      userIndex = 0;
    }
    setUserIndex(userIndex);
    setUser(users[userIndex]);
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = users.length - 1;
    }
    setUserIndex(userIndex);
    setUser(users[userIndex]);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  return (
    <UserContext.Provider value={{ user, users, userIndex, capitalizeFirstLetter, handleBtnClick }}>
      <LanguageContext.Provider value={{language, languages, handleLanguageBtnClick}}>
      <div>
        <h1 className="text-center">Welcome to LinkedUp</h1>
        <h3 className="text-center">Click on the arrows to browse users</h3>
        <LanguageSelector />
        <Row>
          <CardContainer />
        </Row>
      </div>
      </LanguageContext.Provider>
    </UserContext.Provider>
  );
}


export default Gallery;
