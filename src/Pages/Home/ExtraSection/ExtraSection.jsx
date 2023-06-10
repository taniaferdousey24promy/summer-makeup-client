import { useRef } from "react";
import { styled } from "@stitches/react";
import { useTrail, animated } from "@react-spring/web";
import { HiSparkles } from "react-icons/hi";

const AppContainer = styled("div", {
  width: "25vw",
  height: "25vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 500,
});

const Container = styled("div", {
  display: "flex",
  gap: 10,
  // marginBottom: 80,
});

const Box = styled("div", {
  position: "relative",
  height: 50,
  width: 50,
});

const SharedStyles = {
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden",
};

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: "#fafafa",
  border: "solid 2px #1a1a1a",
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: "#6cab64",
  border: "solid 2px #6cab64",
  color: "#fafafa",
});

const items = ["D", "I", "S", "C", "O", "U", "N", "T"];
const ExtraSection = () => {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);

  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };
  return (
    <div>
      <AppContainer>
        <Container onClick={handleClick}>
          {trail.map(({ rotateX }, i) => (
            <Box key={i}>
              <FrontBox
                key={items[i]}
                style={{
                  transform: rotateX.to(
                    (val) => `perspective(600px) rotateX(${val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                {"?"}
              </FrontBox>
              <BackBox
                style={{
                  transform: rotateX.to(
                    (val) => `perspective(600px) rotateX(${180 - val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                {items[i]}
              </BackBox>
            </Box>
          ))}
        </Container>
      </AppContainer>

      <div className="hero  bg-base-100 mb-20 rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-0">
          <img
            src="https://i.postimg.cc/Gp8LYtqV/The-Anti-Aging-Contour-Trick-Every-Woman-Over-40-Should-Try.jpg"
            className="w-[500px] h-[400px]  shadow-2xl"
          />
          <div className=" w-[1000px] bg-[#FBCEB1] h-[400px] p-12">
            <h1 className="text-4xl font-bold">
              SURPRISE on Smokey Eye Makeup Course!
            </h1>
            
            <div className="flex py-6 gap-2 ">
              <HiSparkles className="mt-2 w-7 "></HiSparkles>
              <p>
                {" "}
                <span className="font-bold"> Customized guidance: :</span> Learn
                the techniques, tips, and tricks to create sultry and
                mesmerizing smokey eye looks.
              </p>
            </div>
            <div className="flex py-6 gap-2 ">
              <HiSparkles className="mt-2 w-8 "></HiSparkles>
              <p>
                {" "}
                <span className="font-bold"> Exclusive bonuses: :</span> Gain
                confidence in your makeup skills and unlock your creativity with
                personalized guidance and exclusive bonuses.
              </p>
            </div>
            <button className="m-4 btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
