import { useEffect } from "react";
import { productService } from "../../products.service";

export default function ProductListPage() {
  useEffect(() => {
    const getListProduct = async () => {
      const response = await productService.getList();
      console.log('response: ', response);
    }
    getListProduct();
  }, []);

  return (
    <div>
      Product list page
    </div>
  );
}