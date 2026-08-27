import CareHero from "../components/PlantCare/CareHero";
import CareBasics from "../components/PlantCare/CareBasics";
import CareByRoom from "../components/PlantCare/CareByRoom";
import CareChecklist from "../components/PlantCare/CareChecklist";

export default function PlantCare() {
  return (
    <main>
      <CareHero />
      <CareBasics />
      <CareByRoom />
      <CareChecklist />
    </main>
  );
}
