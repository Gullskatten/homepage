import Card from "../components/Card";
import { subDays } from "date-fns";
import BannerCard from "../components/BannerCard";
import Banner from "../components/Banner";

import BannerImg from "../assets/lowpoly-lg.jpg";
import AutumnImg from "../assets/autumn-lg.jpg";
import WinterImg from "../assets/winter_droneview.jpg";
import WoodsImg from "../assets/woods_droneview-lg.jpg";
import {signInWithFacebook, signout} from "../Auth"

const Home = () => {
  const handleUserLogin = async () => {
   const response = await signInWithFacebook()
   //console.log(response)
  }
  return (
    <div>
      <div className="bg-slate-100 dark:bg-slate-800">
        <Banner src={BannerImg}>
          <BannerCard
            to="/stories"
            buttonText={"Get Started"}
            title="Norwegian Fjords"
            description="Embrace the beauty of the Norwegian fjords and its lush forest."
            onClick={handleUserLogin}
          />
          <button onClick={handleUserLogin}>
Login 
          </button>
        </Banner>
        <section className="p-10">
          <h2 className="font-bold text-4xl">Latest News</h2>
          <div className="grid grid-cols-1 gap-4 my-5 md:grid-cols-2 lg:grid-cols-4">
            <Card
              title="Free React Course 🎉"
              author="Espen G."
              timestamp={new Date().getTime()}
              to="/stories/1"
              description="Familiarize yourself with TypeScript, Tailwind, and Vite. In
			this course we'll skip the basics, and head straight over to
			writing production-ready code. 😄"
              url={AutumnImg}
            />
            <Card
              title="Bugfixes! 🐛"
              author="Espen G."
              timestamp={subDays(new Date(), 2).getTime()}
              to="/stories/2"
              description="Check out the new version with various bugfixes!"
              url={WinterImg}
            />
            <Card
              title="My first post - This is awesome!"
              author="Espen G."
              timestamp={subDays(new Date(), 12).getTime()}
              to="/stories/3"
              description="In this post I'll go over my ambitions for this fancy website."
              url={WoodsImg}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
