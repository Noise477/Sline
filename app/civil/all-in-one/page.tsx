import type { Metadata } from "next";

import CivilServiceDetail from "@/components/CivilServiceDetail";

export const metadata: Metadata = {
  title: "All-in-One Civil Service | SLINE",
  description:
    "SLINE All-in-One civil service brings key earthworks, drainage, plumbing and site-service connection works together for a coordinated site handover.",
};

export default function AllInOnePage() {
  return (
    <CivilServiceDetail
      heroEyebrow="Civil · All-in-One"
      heroTitle="Key site services."
      heroAccentTitle="Brought together."
      heroDescription="A coordinated civil service bringing the key ground, drainage, plumbing and site-service connection stages together so the property can progress toward a serviced, prepared site."
      heroImage="/images/civil/civil-underground-ducting.jpg"
      heroImageAlt="SLINE underground ducting and site service works"
      introEyebrow="What All-in-One Means"
      introTitle="A practical package for getting the site serviced and prepared."
      introParagraphs={[
        "SLINE's All-in-One service is a defined civil and site-servicing package. It is not a claim that every part of an entire construction project is managed by one contractor.",
        "The service is focused on bringing together the connected work required to move a site from ground preparation into a serviced condition. Depending on the project, this can include earthworks, public drainage, private drainage and plumbing, service trenches and associated water, power and communications connection works.",
      ]}
      sections={[
        {
          eyebrow: "Connected Site Services",
          title: "Reduce the handovers between related civil stages.",
          paragraphs: [
            "These activities often overlap physically. The same access routes, trenches and ground conditions can affect drainage, plumbing and other service connections, so separating every stage between different contractors can create unnecessary handovers.",
            "SLINE's All-in-One service brings the related site works into one coordinated programme, using the appropriate specialist crews for each part of the scope.",
          ],
          image: "/images/civil/civil-underground-utilities-trench.jpg",
          imageAlt: "Underground services trench forming part of All-in-One site works",
        },
        {
          eyebrow: "Typical Sequence",
          title: "From ground works to a serviced site.",
          paragraphs: [
            "A typical All-in-One scope may progress through earthworks and trenching, public drainage connections, private drainage and plumbing, associated service routes and connections, followed by backfilling, reinstatement and site preparation for the next stage.",
            "The exact sequence depends on the property and the approved project requirements. The purpose is to keep the related civil stages connected rather than presenting All-in-One as a generic label for every construction trade.",
          ],
          image: "/images/civil/civil-underground-services-installation.jpg",
          imageAlt: "SLINE installing underground site services",
        },
      ]}
      relatedProjectText="197 Stoddard Road is a practical example of SLINE's All-in-One capability. SLINE delivered the connected work across asbestos removal, demolition, earthworks, public drainage, private drainage and plumbing, and related site works as part of the wider project."
    />
  );
}
