export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule:any) => Rule.max(60).warning("Keep under 60 characters"),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule:any) =>
        Rule.max(160).warning("Keep under 160 characters"),
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      description: "Hide this page from Google search",
      initialValue: false,
    },
  ],
};
