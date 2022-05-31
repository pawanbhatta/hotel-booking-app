import "./list.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [openDate, setOpenDate] = useState(false);

  const [destination, setDestination] = useState(location.state?.destination);
  const [date, setDate] = useState(location.state?.date);
  const [options, setOptions] = useState(location.state?.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsDestination">
              <h5 className="lsSearchHeading">Destination</h5>
              <input
                className="lsSearchInput"
                type="text"
                placeholder={destination}
              />
            </div>
            <div className="lsDestination">
              <h5 className="lsSearchHeading">Check-in Date</h5>
              <span
                className="lsCheckIn"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <h5 className="lsSearchHeading">Options</h5>
            <div className="lsSearchOptions">
              <div className="lsOptionGroup">
                <p className="lsType">Minimum Price (per night)</p>
                <input className="lsSearchTypeInput" type="text" />
              </div>
              <div className="lsOptionGroup">
                <p className="lsType">Maximum Price (per night)</p>
                <input className="lsSearchTypeInput" type="text" />
              </div>
              <div className="lsOptionGroup">
                <p className="lsType">Adult</p>
                <input
                  className="lsSearchTypeInput"
                  type="number"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionGroup">
                <p className="lsType">Children</p>
                <input
                  className="lsSearchTypeInput"
                  type="number"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionGroup">
                <p className="lsType">Room</p>
                <input
                  className="lsSearchTypeInput"
                  type="number"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button className="lsSearchBtn">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
