import "./AdminHeader.scss";
const AdminHeader = () => {
  return (
    <div class="div-main-header">
      <div class="div-logo">
        <img
          src="/images/logo.svg"
          alt="logo app"
          style={{ width: "140px" }}
        ></img>
        <div class="div-handle-sidebar">
          <div class="div-on-sidebar"></div>
        </div>
      </div>
      <div class="div-search-notify">
        <div class="div-search">
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="bi bi-search i-search"></i>
            </span>
          </div>
        </div>
        <div class="div-profile">
          <img
            src="/images/avatar.png"
            alt="logo app"
            class="img-avt"
          ></img>
          <span class="span-username">Joohn Doe</span>
          <i class="bi bi-chevron-down" style={{fontSize: "8px"}}></i>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
