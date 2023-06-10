import { useEffect, useState } from "react";
import { animated } from '@react-spring/web'

const PopularInstructors = () => {
  
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.filter(
          (popular) => popular.studentNumber >= 8
        );
        setClasses(popularClasses);
      });
  }, []);
  console.log(classes);
  return (
    <div>
    </div>
  );
};

export default PopularInstructors;
