//Example of connect graphQL APP of Vtex IO with Next js

import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        categories(treeLevel: 2) @context(provider: "vtex.store-graphql") {
          name
          hasChildren
          children {
            name
            children {
              name
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      categories: data.categories,
    },
  };
}

export default function Home({ categories }) {
  console.log("categories are", categories);
  return (
    <div>
      {categories.map((category) => (
        <h5 key={category.name}>{category.name}</h5>
      ))}
    </div>
  );
}

//REST API  Example

/*
{
export default function Home({ categories }) {
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
}
*/
