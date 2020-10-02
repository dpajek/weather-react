import React, { useEffect } from "react";
import "./fixedheader.css";
import CurrentWeather from "./currentweather";

const FixedHeader = (props) => {
  const headerClasses = ["fixed-header"];

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 75) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  if (scrolled) {
    headerClasses.push("scrolled-fixed-header");
  }

  const { current, currentMain} = props;

  headerClasses.push(currentMain);

  return (
    <header className={headerClasses.join(" ")}>
      <h1>Oakville, ON</h1>
      <div>
        <CurrentWeather current={current} />
      </div>
    </header>
  );
};
export default FixedHeader;
