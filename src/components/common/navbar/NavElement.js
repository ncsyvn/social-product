import Icon from "../Icon";
import "./NavElement.scss";

const NavElement = ({
  title = "",
  iconPath = "",
  isActive,
  index,
  selectNav,
}) => {
  const onClickNav = () => {
    selectNav(index);
  };
  return (
    <div class="nav-element" onClick={onClickNav} style={{borderLeft: isActive ? "3px solid #fe8a7d": "3px solid #404e67"}}>
      <Icon name={iconPath} color="#c3c3c3" width="20px" height="20px" style={{margin: "0px 12px"}}></Icon>
      <span class="nav-name" style={{color: isActive ? "#fe8a7d" : "#dcdcdc"}}>{title}</span>
    </div>
  );
};

export default NavElement;
