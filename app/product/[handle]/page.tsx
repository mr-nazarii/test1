import OpengraphImage from 'components/opengraph-image';
import { getPage } from 'lib/bigcommerce';

export const runtime = 'nodejs';

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
