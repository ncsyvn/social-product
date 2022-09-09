import "./AdminHeader.scss";
const AdminHeader = () => {
  return (
    <div className="div-main-header">
      <div className="div-logo">
        <img
          src="/images/logo.svg"
          alt="logo app"
          style={{ width: "140px" }}
        ></img>
        <div className="div-handle-sidebar">
          <div className="div-on-sidebar"></div>
        </div>
      </div>
      <div className="div-search-notify">
        <div className="div-search">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="bi bi-search i-search"></i>
            </span>
          </div>
        </div>
        <div className="div-profile">
          <img
            src="/images/avatar.png"
            alt="logo app"
            className="img-avt"
          ></img>
          <span className="span-username">Joohn Doe</span>
          <i className="bi bi-chevron-down" style={{fontSize: "8px"}}></i>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
