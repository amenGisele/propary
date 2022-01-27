import "./Navigation.css";
import NavigationItem from "./NavigationItem";

function Navigation() {
  return (
    <div>
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
