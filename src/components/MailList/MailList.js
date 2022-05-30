import "./mailList.css";

const MailList = () => {
  return (
    <div className="mailList">
      <h3 className="mlTitle">Save time, save money!</h3>
      <p className="mlDesc">Subscribe to get the most out of this site</p>
      <div className="mlBox">
        <input type="text" className="mlInput" />
        <button className="mlSubscribe">Subscribe</button>
      </div>
      <div className="mlCheckbox">
        <input className="mlCheckboxInp" type="checkbox" />
        <label className="mlCheckboxLbl">
          Get the link to download this app
        </label>
      </div>
    </div>
  );
};

export default MailList;
