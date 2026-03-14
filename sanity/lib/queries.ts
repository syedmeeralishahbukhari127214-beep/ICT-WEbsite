// ================= BLOG QUERIES =================

// List of all blogs
export const blogsQuery = `
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  excerpt,
  "slug": slug.current,
  "image": image{
    asset->{
      _id,
      url
    },
    alt
  },
  body,
}
`;

// Single blog by slug
export const singleBlogQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "image": image{
    asset->{
      _id,
      url
    },
    alt
  },
  body,
  seo{
    metaTitle,
    metaDescription,
    keywords,
    "ogImage": ogImage{
      asset->{
        _id,
        url
      },
      alt
    },
    noIndex
  },
  author->{
    name
  }
}
`;

// ================= MENTORS QUERIES =================

// List of mentors
export const mentorsQuery = `
*[_type == "mentor"] | order(name asc){
  _id,
  name,
  slug,
  "image": image{
    asset->{
      _id,
      url
    },
    alt
  },
  "thumbnail": thumbnail{
    asset->{
      _id,
      url
    },
    alt
  },
  designation
}
`;

// Single mentor by slug
export const singleMentorQuery = `
*[_type == "mentor" && slug.current == $slug][0]{
  name,
  designation,
  "image": image{
    asset->{
      _id,
      url
    },
    alt
  },
  shortBio,
  bio,
  "thumbnail": thumbnail{
    asset->{
      _id,
      url
    },
    alt
  },
  expertise,
  seo{
    metaTitle,
    metaDescription,
    keywords,
    "ogImage": ogImage{
      asset->{
        _id,
        url
      },
      alt
    },
    noIndex
  }
}
`;

// ================= COURSES QUERIES =================

// List of courses
export const coursesQuery = `
*[_type == "course"] | order(_createdAt desc){
  _id,
  title,
  slug,
  shortDescription,
  category,
  country,
  price,
  duration,
  "thumbnail": thumbnail{
    asset->{
      _id,
      url
    },
    alt
  },
  instructor->{
    name,
    "image": image{
      asset->{
        _id,
        url
      },
      alt
    }
  }
}
`;

// Single course by slug
export const singleCourseQuery = `
*[_type=="course" && slug.current==$slug][0]{
  title,
  category,
  "thumbnail": thumbnail{
    asset->{
      _id,
      url
    },
    alt
  },
  description,
  explain,
  shortExplain,
  faqs,
  features,
  gallery,
  benefits,
  outline,
  seo{
    metaTitle,
    metaDescription,
    canonicalUrl,
    keywords,
    "ogImage": ogImage{
      asset->{
        _id,
        url
      },
      alt
    }
  },
  instructor->{
    name,
    designation,
    "image": image{
      asset->{
        _id,
        url
      },
      alt
    },
    slug
  },
  certificate
}
`;