import { client } from "@/sanity/lib/client";
import LeadForm from "./LeadForm";

const leadCoursesQuery = `
*[_type == "course"] | order(_createdAt desc) {
  "value": slug.current,
  title
}
`;

export default async function LeadPage() {
  const courses = await client.fetch(leadCoursesQuery);

  const courseOptions = courses.map((c: { value: string; title: string }) => ({
    value: c.value,
    label: c.title,
  }));

  return <LeadForm courses={courseOptions} />;
}
