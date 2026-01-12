import sanityClient from '@sanity/client';

const client = sanityClient({
   projectId: "tygmtn6b",
  dataset: "production",
  token: 'skn1IkRempfYs8wAwiD6wDmk2o6o2D3D3DGu7AR8p2E9kTYHq8r7ktOz7lhWpzZb5zy7KIzHhmXSeH0OSEEmwMQkGeRyR7YHRnhHxi9wQoPLvHix2MoHkoJMS30DsUhkBwIheN5Q5AfAD3IqrgKH3qbUEiYCNJ0XSnt1llUywmsgRY48WNNd',    // token must have delete permissions
  useCdn: false,
});

async function deleteAllPosts() {
  try {
    const posts = await client.fetch('*[_type == "post"]._id');
    console.log(`Total posts found: ${posts.length}`);

    if (posts.length === 0) {
      console.log("No posts to delete.");
      return;
    }

    const transaction = client.transaction();
    posts.forEach(id => transaction.delete(id));

    await transaction.commit();
    console.log(`All ${posts.length} posts deleted at once.`);
  } catch (err) {
    console.error("Error deleting posts:", err);
  }
}

deleteAllPosts();
