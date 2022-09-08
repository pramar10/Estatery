import React from "react";
import Button from "../components/Button";
import DropDown from "../components/DropDown";
import FilterCard from "../components/FilterCard";
import Header from "../components/Header";
import HomeCard from "../components/HomeCard";
import SearchBar from "../components/SearchBar";
import dummyData from "../constant/dummydata";
import "./homepage.style.css";

const HomePage = () => {
  const typeRef = React.useRef(null);
  const priceRef = React.useRef(null);
  const [searchData, setSearchata] = React.useState(dummyData);

  const filterData = () => {
    const data = dummyData.filter(
      (item) => item.propertyType === typeRef.current.type
    );
    setSearchata(data);
  };
  React.useEffect(() => {}, [searchData]);
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className="search">
        <SearchBar />
      </div>
      <div className="filter">
        <FilterCard
          heading={"Location"}
          subHeading={"New York, USA"}
          icon={false}
        />
        <FilterCard heading={"When"} subHeading={"Select Move-in Date"} />
        <DropDown
          heading={"Price"}
          subHeading={"$500-$2,500"}
          details={["$500-$1000", "$1000-$2000", "$2000-$3000", "$3000+"]}
          ref={priceRef}
        />
        <DropDown
          heading={"Properpty Type"}
          subHeading={"Houses"}
          details={["TownHouse", "Vila", "Houses", "Flat"]}
          ref={typeRef}
        />

        <Button
          label={"Search"}
          bg="#7048e8"
          textColor={"#fff"}
          onClick={filterData}
        />
      </div>
      <div className="card-section">
        {searchData.map((item, id) => {
          return (
            <HomeCard
              key={item.id}
              pic={item.image}
              price={item.rent}
              restaurant={item.restaurant}
              location={item.location}
              details={item.details}
              badge={item.badge}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
