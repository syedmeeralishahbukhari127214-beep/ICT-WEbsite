// schemas/course.js
export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "category", type: "string" },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
     // schemas/course.js
{
  name: "country",
  title: "Country",
  type: "string", 
  options: {
    list: [
      { title: "Pakistan", value: "Pakistan" },
      { title: "UK", value: "UK" },
      { title: "USA", value: "USA" },
      { title: "Saudi Arabia", value: "Saudi" },
      { title: "UAE", value: "UAE" },
      { title: "Canadain", value: "Canadian" },
    ],
    layout: "dropdown", // optional: nice dropdown in Sanity studio
  },
  validation: (Rule: any) => Rule.required(),
},

    {
      name: "thumbnail",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "explain",
      type: "array",
      of: [{ type: "block" }],
    },

    // 🔥 EXTRA IMAGES
    {
      name: "gallery",
      title: "Course Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },

    // 🔥 BENEFITS
    {
      name: "benefits",
      title: "Course Benefits",
      type: "array",
      of: [{ type: "string" }],
    },

    // 🔥 COURSE OUTLINE
    {
      name: "outline",
      title: "Course Outline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    },

    // 🔥 INSTRUCTOR
    {
      name: "instructor",
      type: "reference",
      to: [{ type: "mentor" }],
    },

    // 🔥 CERTIFICATION
    {
      name: "certificate",
      title: "Certification Section",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "text", type: "text" },
        {
          name: "image",
          type: "image",
          options: { hotspot: true },
        },
      ],
    },

    // ✅ FAQS (ONLY NEW ADDITION)
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    },
     // 🔥 SEO METADATA
      {
  name: "seo",
  title: "SEO Settings",
  type: "seo",
},
    
    // Alt text for Thumbnail (SEO ke liye zaroori hai)
    {
      name: "thumbnailAlt",
      title: "Thumbnail Alt Text",
      type: "string",
      description: "Image ke bare mein batayein (SEO aur Accessibility ke liye)",
    },
  ],
};
