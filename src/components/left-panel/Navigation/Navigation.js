import "./Navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import UserProfile from "../UserProfile/UserProfile";

function Navigation() {
  return (
    <div className="left-panel">
      <UserProfile />
      <ul>
        <NavigationItem text="Dashboard" />
        <NavigationItem text="Lessons" />
        <NavigationItem text="Students" />
        <NavigationItem text="Messages" />
        <NavigationItem text="Grades" />
      </ul>
    </div>
  );
}

export default Navigation;
