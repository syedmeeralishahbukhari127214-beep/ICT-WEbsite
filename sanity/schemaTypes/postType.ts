import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    // TITLE
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    // SLUG
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),

    // PUBLISH DATE
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    // THUMBNAIL IMAGE WITH ALT TEXT
    defineField({
      name: "image",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Describe the image for SEO and accessibility",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),

    // BLOG BODY
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },

        // BODY IMAGE WITH ALT TEXT
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              description: "Describe the image for SEO and accessibility",
              validation: (Rule) => Rule.required(),
            },
          ],
        },

        // TABLE STRUCTURE
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

    // SEO SETTINGS
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          type: "string",
        },
        {
          name: "metaDescription",
          type: "text",
          rows: 3,
        },
        {
          name: "keywords",
          type: "array",
          of: [{ type: "string" }],
        },

        // OG IMAGE WITH ALT
        {
          name: "ogImage",
          title: "Open Graph Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
          ],
        },

        {
          name: "noIndex",
          type: "boolean",
          initialValue: false,
        },
      ],
    }),
  ],
});