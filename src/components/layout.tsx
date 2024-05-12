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
  ];
  return (
    <>
      <Flex justifyContent="center" alignItems="center" marginBottom="1rem">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          {...props}
        >
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
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
