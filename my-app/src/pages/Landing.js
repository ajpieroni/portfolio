import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import "../styles/Landing.css"

export default function Landing() {
  return (
    <div className="landing-wrapper">
      <Header />
      <p>here is landing</p>
      <ProfileCard />
    </div>
  );
}
