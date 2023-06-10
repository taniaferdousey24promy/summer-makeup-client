import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInsturctors/PopularInstructors";


const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <ExtraSection></ExtraSection>
            <PopularInstructors></PopularInstructors>

        </div>
    );
};

export default Home;