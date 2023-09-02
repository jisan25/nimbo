import React, { useEffect, useState } from "react";
import UserList from "../../components/Home/UserList";
import Hero from "../../components/common/Hero/Index";
import "./styles.css";

const Home = ({ setProgress }) => {
  const [loading, setLoading] = useState(true);

  const [fltrImgDarkClass, setFltrImgDarkClass] = useState("");
  const [users, setUsers] = useState([]);

  const getUsersByFilter = async (value) => {
    setLoading(true);
    let url = `https://api.unsplash.com/search/photos?client_id=vssir3ikLfDTFf379QTIwr4KpKw8YfsUyG43w-NA65g&page=2&query=${value}&per_page=30&orientation=landscape`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setUsers(parsedData.results);
    setLoading(false);
  };

  const getUsers = async () => {
    setLoading(true);
    setProgress(30);
    let url = `https://api.unsplash.com/search/photos?client_id=vssir3ikLfDTFf379QTIwr4KpKw8YfsUyG43w-NA65g&page=2&query=people&per_page=30&orientation=landscape`;
    let data = await fetch(url);
    setProgress(50);
    let parsedData = await data.json();
    setProgress(75);
    setUsers(parsedData.results);
    setLoading(false);
    setProgress(100);
  };

  const handleFilter = (e) => {
    let id = e.target.id;
    switch (id) {
      case "male":
        document.getElementById("male").classList.add("filter-active");
        document.getElementById("female").classList.remove("filter-active");
        document.getElementById("young").classList.remove("filter-active");
        document.getElementById("old").classList.remove("filter-active");
        document.getElementById("people").classList.remove("filter-active");
        return getUsersByFilter(id);
      case "female":
        document.getElementById("female").classList.add("filter-active");
        document.getElementById("male").classList.remove("filter-active");
        document.getElementById("young").classList.remove("filter-active");
        document.getElementById("old").classList.remove("filter-active");
        document.getElementById("people").classList.remove("filter-active");
        return getUsersByFilter(id);
      case "young":
        document.getElementById("young").classList.add("filter-active");
        document.getElementById("male").classList.remove("filter-active");
        document.getElementById("female").classList.remove("filter-active");
        document.getElementById("old").classList.remove("filter-active");
        document.getElementById("people").classList.remove("filter-active");
        return getUsersByFilter(id);
      case "old":
        document.getElementById("old").classList.add("filter-active");
        document.getElementById("male").classList.remove("filter-active");
        document.getElementById("female").classList.remove("filter-active");
        document.getElementById("young").classList.remove("filter-active");
        document.getElementById("people").classList.remove("filter-active");
        return getUsersByFilter(id);
    }
  };

  const handleClearFilter = () => {
    document.getElementById("male").classList.remove("filter-active");
    document.getElementById("female").classList.remove("filter-active");
    document.getElementById("young").classList.remove("filter-active");
    document.getElementById("old").classList.remove("filter-active");
    document.getElementById("people").classList.add("filter-active");
    setFltrImgDarkClass("");
    getUsers();
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {/* Home Page Hero Section - Nimbo Users */}
      <Hero label="Nimbo Users" />

      {/* Home Page  Filter - Male, Female, Young, Old */}

      <div className="userFilter-wrap">
        <button disabled={true} id="people" className="filter-active">
          people
        </button>
        <button id="male" onClick={handleFilter}>
          male
        </button>
        <button id="female" onClick={handleFilter}>
          female
        </button>
        <button id="young" onClick={handleFilter}>
          young
        </button>
        <button id="old" onClick={handleFilter}>
          old
        </button>

        <span className="clear-filter" onClick={handleClearFilter}>
          X
        </span>
      </div>

      {/* Nimbo Clients */}

      <UserList
        users={users}
        fltrImgDarkClass={fltrImgDarkClass}
        loading={loading}
      />
    </div>
  );
};

export default Home;
