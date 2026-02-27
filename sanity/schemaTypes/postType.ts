import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "image",
      type: "image",
    }),

    // 🔥 BODY WITH WORKING TABLE STRUCTURE
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },

        {
          name: "table",
          title: "Table",
          type: "object",
          fields: [
            {
              name: "rows",
              title: "Rows",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "row",
                  title: "Row",
                  fields: [
                    {
                      name: "cells",
                      title: "Cells",
                      type: "array",
                      of: [{ type: "string" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),

    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "metaTitle", type: "string" },
        { name: "metaDescription", type: "text", rows: 3 },
        {
          name: "keywords",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "ogImage", type: "image" },
        {
          name: "noIndex",
          type: "boolean",
          initialValue: false,
        },
        {
          name: "thumbnailAlt",
          type: "string",
        },
      ],
    }),
  ],
});
