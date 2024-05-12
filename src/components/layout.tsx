import { usePathname } from "next/navigation";
import { Flex, Button, Divider, Link } from "@aws-amplify/ui-react";
export default function Layout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const routes = [
    {
      href: "/",
      label: "Overview",
      active: pathname === "/",
    },
    {
      href: "/genres",
      label: "Genres",
      active: pathname === "/genres",
    },
    {
      href: "/platforms",
      label: "Platforms",
      active: pathname === "/platforms",
    },
    {
      href: "/products",
      label: "Products",
      active: pathname === "/products",
    },
  ];
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" margin="1rem">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          {...props}
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              style={{ padding: "16px" }}
            >
              {/* className={'text-sm font-medium transition-colors hover:text-primary-500'} 
        {`${route.active ? 'text-primary-500' : 'text-gray-900'}`}> */}
              {route.label}
            </Link>
          ))}
        </nav>
        <Button variation="primary" borderRadius="100%" className="h-8 w-8">
          A
        </Button>
      </Flex>
      <Divider size="small"></Divider>
      {children}
    </>
  );
}
