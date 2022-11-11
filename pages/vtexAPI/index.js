export default function VtexAPI({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <h4>Hello{category.name}</h4>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://colgateb2b.myvtex.com/api/catalog_system/pub/category/tree/3?sc=1"
  );
  const categories = await res.json();
  console.log("categories", categories);

  return {
    props: {
      categories,
    },
  };
}
