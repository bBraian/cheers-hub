import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export function DynamicBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x); // Split the pathname and filter out empty strings

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathnames.length > 1 && pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <Fragment key={index}>
              {!isLast ? (
                <>
                  <BreadcrumbItem key={to}>
                    <BreadcrumbLink asChild>
                        <Link to={to}>{value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage>{value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</BreadcrumbPage>
              )}
            </Fragment>
                
            );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};