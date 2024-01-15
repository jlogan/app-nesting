// layout.tsx
import { getCategories, getCategory } from '#/app/api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import FormClientComponent from 'app/activities/formClientComponent';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = await getCategory({ slug: params.categorySlug });
  const categories = await getCategories({ parent: params.categorySlug });
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/activities/${category.slug}`}
          items={[
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}
