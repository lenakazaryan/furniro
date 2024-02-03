import "./BurgerMenu.css";
import SideBar from "./Sidebar";


const BurgerMenu = () => {
    return (
        <div class="burgerMenu_content">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        </div>
    )
}

export default BurgerMenu;
