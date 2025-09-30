type BlogPageProps = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: PagBlogPagePropseProps) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: BlogPageProps) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Demo CICD</p>
      <p>Testing CICD</p>
    </>
  );
}
