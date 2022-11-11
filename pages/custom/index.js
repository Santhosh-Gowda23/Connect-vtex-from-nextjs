//Example of connect graphQL APP of custom built service on top of Vtex IO with Next js

import { gql } from "@apollo/client";
import client from "../../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      {
        exampleList {
          customerId
          highVolumeCustomer
          creditLimit
        }
      }
    `,
  });

  return {
    props: {
      exampleList: data.exampleList,
    },
  };
}

export default function Custom(exampleList) {
  console.log(process.env.NODE_ENV);
  console.log("cat is", exampleList);
  return (
    <div>
      This is an example of custom service, checkout the console to look for the
      response
    </div>
  );
}
