import "./styles.css";
import Kitchen from "../components/Kitchen";
import LivingRoom from "../components/LivingRoom";
import Bedroom from "../components/Bedroom";
import Bath from "../components/Bath";

export default function App() {
  return (
    <div className="App">
      <Bedroom bedNum="1" />
      <Kitchen />
      <Bath size="Full Bath" />
      <Bedroom bedNum="2" />
      <LivingRoom />
      <Bath size="Half Bath" />
      <Bedroom bedNum="3" />
    </div>
  );
}
