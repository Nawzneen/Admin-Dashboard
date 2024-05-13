import { GetGenresQueryVariables, Product } from "@/API";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@aws-amplify/ui-react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
interface ProductsTableProps {
  products: Product[];
}
export default function ProductsTable({ products }: ProductsTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Genre</TableCell>
          <TableCell>Platform</TableCell>
          <TableCell>Date Added</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product, key) => (
          <TableRow key={key}>
            <TableCell>
              {product.image === null || product?.image === undefined ? null : (
                <StorageImage
                  width={"250px"}
                  accessLevel="private"
                  alt="image"
                  imgKey={product?.image}
                />
              )}
            </TableCell>
            <TableCell>{product?.name}</TableCell>
            <TableCell>{product?.price}</TableCell>
            <TableCell>{product?.Genre?.name}</TableCell>
            <TableCell>{product?.Platform?.name}</TableCell>
            <TableCell>
              {Intl.DateTimeFormat("en-us").format(
                new Date(product?.createdAt!)
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
