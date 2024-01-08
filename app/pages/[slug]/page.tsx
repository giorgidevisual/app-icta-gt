/* import client from "@/apollo-client"
import { gql } from "@apollo/client"


export default function Page({ params }: { params: { slug: string } }) {
  console.log({params})
  return <div>My Post: {params.slug}</div>
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
    {
      pages {
        nodes {
          slug
        }
      }
    }
    `
  },);

  return {
    paths: data.pages.nodes.map((node: any) => ({
      params: {
        slug: node.slug,
      },
    
    })),
    fallbak: false
  }
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

getStaticProps */

import { PagesData } from "@/utils/typesPages";
import { gql, useQuery } from "@apollo/client";


const GET_PAGES = gql`
  query GetPages {

      pages {
        nodes {
          slug
        }
      }
  }
`
function Pages() {
  const { loading, error, data } = useQuery<PagesData>(GET_PAGES)
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data?.pages.nodes.map(({ id, slug, title, content }) => (
    <div key={id}>
      <h2>{slug}</h2>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  ));
}


export default Pages;