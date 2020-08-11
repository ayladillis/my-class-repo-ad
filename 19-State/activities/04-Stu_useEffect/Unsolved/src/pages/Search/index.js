import React, { useState, useEffect, Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search() {
  const [searchState, setSearchState] = useState({
    search: "Wikipedia",
    title: "",
    description: "",
    url: "",
    error: ""
  });

  useEffect(() => {
    document.title = "Wikipedia Searcher";

    API.searchTerms(searchState.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchState({
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setSearchState({ error: err.message }));
  }, []);

  const handleInputChange = event => {
    setSearchState({ search: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!searchState.search) {
      return;
    }
    API.searchTerms(searchState.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchState({
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setSearchState({ error: err.message }));
  };
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: searchState.error ? 1 : 0, marginBottom: 10 }}>
          {searchState.error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={searchState.search}
        />
        <SearchResults
          title={searchState.title}
          description={searchState.description}
          url={searchState.url}
        />
      </Container>
    </div>
  );
};

export default Search;
