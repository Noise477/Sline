import type { Metadata } from "next";

import CivilServiceDetail from "@/components/CivilServiceDetail";

export const metadata: Metadata = {
  title: "Public Drainage | Civil | SLINE",
  description:
    "Public stormwater and wastewater drainage works, road-corridor excavation and coordinated site delivery from SLINE.",
};

export default function PublicDrainagePage() {
  return (
    <CivilServiceDetail
      heroEyebrow="Civil · Public Drainage"
      heroTitle="Public drainage."
      heroAccentTitle="Planned around access."
      heroDescription="Public stormwater and wastewater works coordinated around excavation, road-corridor requirements, traffic management and the wider site programme."
      heroImage="/images/civil/civil-public-drainage-night.jpg"
      heroImageAlt="SLINE public drainage night works"
      introEyebrow="Public Drainage"
      introTitle="Connecting the site to public drainage infrastructure."
      introParagraphs={[
        "Public drainage work can involve excavation, access to existing public infrastructure, new stormwater or wastewater connections, backfilling and reinstatement. The work needs to be planned around the location of existing services and the operational requirements of the surrounding area.",
        "SLINE can deliver public drainage as its own civil scope or coordinate it with earthworks, demolition and other site works where the project requires several connected stages.",
      ]}
      sections={[
        {
          eyebrow: "Road Corridor Works",
          title: "Public infrastructure can extend beyond the site boundary.",
          paragraphs: [
            "Where drainage connections require work within the public road corridor, the construction sequence needs to account for access, traffic and the conditions attached to working in that environment.",
            "Depending on the project, this can include traffic-management coordination and restricted working windows so the drainage work can be completed while minimising disruption around the site.",
          ],
          image: "/images/civil/civil-road-corridor-nightworks.jpg",
          imageAlt: "SLINE road corridor drainage night works",
        },
        {
          eyebrow: "Stormwater & Wastewater",
          title: "Underground work planned for what comes next.",
          paragraphs: [
            "Stormwater and wastewater systems form a critical part of many redevelopment and construction projects. Excavation, installation, connections and reinstatement need to be sequenced so that later site works can proceed without unnecessary disturbance.",
            "SLINE coordinates the drainage scope with the surrounding ground works and site programme so each stage is prepared for the next.",
          ],
          image: "/images/civil/civil-public-drainage-excavation.jpg",
          imageAlt: "Public drainage excavation by SLINE",
        },
      ]}
      relatedProjectText="197 Stoddard Road included public stormwater and wastewater drainage works within the road corridor. The work required a Traffic Management Plan and critical drainage activity was completed during a restricted 8:00 PM to 4:00 AM working window."
    />
  );
}
