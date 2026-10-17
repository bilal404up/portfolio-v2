import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import { WorkTable } from "@/components/WorkTable";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Four builds by Bilal: Docket, Gigboard, Sidekick and Chaser. Each has a live demo, its code on GitHub and a case study.",
};

export default function WorkIndex() {
  return (
    <main id="main" className="wrap">
      <section className="page-head">
        <Crumbs trail={[{ label: "Work" }]} />
        <h1 className="display page-title reveal" style={{ ["--d" as string]: "80ms" }}>
          Work
        </h1>
        <p className="lede page-lede reveal" style={{ ["--d" as string]: "160ms" }}>
          Four builds, each a demo with invented data. Every one has a live link, its code on GitHub, and a case study that explains the decisions behind it.
        </p>
      </section>
      <section style={{ paddingBottom: "8rem" }}>
        <WorkTable projects={projects} />
      </section>
    </main>
  );
}
