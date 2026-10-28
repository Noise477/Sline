import type { Metadata } from "next";

import CivilServiceDetail from "@/components/CivilServiceDetail";

export const metadata: Metadata = {
  title: "Earthworks | Civil | SLINE",
  description:
    "Earthworks, excavation and site preparation from SLINE across Auckland and beyond.",
};

export default function EarthworksPage() {
  return (
    <CivilServiceDetail
      heroEyebrow="Civil · Earthworks"
      heroTitle="Ground shaped."
      heroAccentTitle="Site ready."
      heroDescription="Excavation, ground preparation and earthworks planned around access, drainage, services and the next stage of the site."
      heroImage="/images/demolition/demolition-earthworks-excavation.jpg"
      heroImageAlt="SLINE earthworks and excavation"
      introEyebrow="Earthworks"
      introTitle="Practical ground works built around the wider programme."
      introParagraphs={[
        "Earthworks often sit between demolition and the next construction stage. Once structures, unsuitable materials or obstructions have been removed, the site may still need excavation, levelling, filling, trenching or preparation before drainage, services or building work can continue.",
        "SLINE approaches earthworks with the wider site sequence in mind. Access, spoil movement, existing services, drainage requirements and the condition required for the next stage are considered as part of the work.",
      ]}
      sections={[
        {
          eyebrow: "Excavation & Preparation",
          title: "The next stage starts with the ground.",
          paragraphs: [
            "SLINE undertakes excavation and general site preparation for residential, commercial and redevelopment environments. The exact scope depends on the existing ground conditions and what the site needs to support next.",
            "Where demolition has already taken place, connecting the earthworks stage can create a cleaner transition from structure removal into ground preparation rather than treating the two scopes as unrelated activities.",
          ],
          image: "/images/civil/civil-excavator-nightworks.jpg",
          imageAlt: "SLINE excavator carrying out site works",
        },
        {
          eyebrow: "Trenching & Services",
          title: "Work around what already runs below the site.",
          paragraphs: [
            "Earthworks can include trenching and excavation associated with drainage and underground services. These areas need to be coordinated around existing infrastructure, safe access and the later work that will follow.",
            "Planning the ground works alongside drainage and service requirements helps reduce unnecessary reopening of completed areas and keeps the site moving in a logical sequence.",
          ],
          image: "/images/civil/civil-underground-utilities-trench.jpg",
          imageAlt: "Underground utilities trench on a SLINE civil site",
        },
      ]}
      relatedProjectText="At 197 Stoddard Road, earthworks formed part of a wider SLINE-delivered scope that also included asbestos removal, demolition, public drainage, private drainage and plumbing, and All-in-One site works."
    />
  );
}
