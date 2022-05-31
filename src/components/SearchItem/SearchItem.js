import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        className="siImage"
        src="https://pix10.agoda.net/hotelImages/286/286522/286522_13121915450017936191.jpg?ca=2&ce=1&s=1024x768"
        alt=""
      />
      <div className="itemDescription">
        <div className="itemLeft">
          <h1 className="itemTitle">Hotel Annapurna</h1>
          <p className="itemDistance">300m from lake side</p>
          <p className="itemOffer">Free Airport Taxi</p>
          <p className="itemFeature">
            Air conditioning with home theatre system
          </p>
          <p className="itemSize">Entire Flat . 2 bedrooms . King size bed</p>
          <p className="itemCancellation">Free Cancellation</p>
          <p className="itemText">
            Feel free to book now, you can cancel at any time !
          </p>
        </div>

        <div className="itemRight">
          <div className="top">
            <span className="grade">Excellent</span>
            <span className="rate">7.8</span>
          </div>
          <div className="bottom">
            <h3 className="itemPrice">$111</h3>
            <p className="itemPriceInc">Includes taxes and fees</p>
            <button className="seeAvail">See Availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
