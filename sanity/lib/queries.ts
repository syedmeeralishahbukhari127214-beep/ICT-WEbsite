




export const blogsQuery = `
*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  excerpt,
  "slug": slug.current,
  "mainImage": image,
  body,
  thumbnail,
}
`;
export const singleBlogQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  "mainImage": image,
  body,
  seo,
  thumbnail,
  author->{
    name
  }
}
`;

export const mentorsQuery = `
*[_type == "mentor"] | order(name asc) {
  _id,
  name,
  slug,
  image,
  thumbnail,
  designation
}
`;

// SINGLE mentor
export const singleMentorQuery = `
*[_type == "mentor" && slug.current == $slug][0]{
  name,
  designation,
  image,
  shortBio,
  bio,
  thumbnail,
  expertise,
   seo {
    metaTitle,
    metaDescription,
    keywords,
    ogImage,
    noIndex
  }
}
`;
export const coursesQuery = `
*[_type == "course"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  shortDescription,
  category,
  price,
  duration,
  thumbnail,
  instructor->{
    name,
    image
  }
}
`;


// sanity/lib/queries.ts
export const singleCourseQuery = `
*[_type=="course" && slug.current==$slug][0]{
  title,
  category,
  thumbnail,
  description,
   explain,        // 🔥 Add this
  shortExplain,
  faqs, 
  features,
  gallery,
  benefits,
  outline,
  seo {
    metaTitle,
    metaDescription,
    canonicalUrl,
     keywords,
    ogImage
  },

  instructor->{
    name,
    designation,
    image,
    slug 
  },

  certificate
}
`;


