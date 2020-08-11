import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";
import ArticleContext from "../../utilis/ArticleContext";

function Search() {
  // const [search, setSearch] = useState("Wikipedia");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [url, setUrl] = useState("");
  // const [error, setError] = useState("");

  const [searchInfo, setSearchInfo] = userState ({
    search: "Wikipedia",
    title: "",
    description: "", 
    url: "",
    useState: ""
  })

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setTitle(res.data[1]);
        setDescription(res.data[2][0]);
        setUrl(res.data[3][0]);
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <ArticleContext.provider>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={search}
        />
        <SearchResults title={title} description={description} url={url} />
        </ArticleContext.provider>
      </Container>
    </div>
  );
}

export default Search;
