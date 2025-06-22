"use client";

import { useEffect, useState } from "react";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
}

export default function Product() {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [sum,setSum] = useState(0)

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let sumData = 0
    for (let i=0; i<product.length;i++){
        sumData += product[i].price 
    }

    setSum(sumData)
  },[product])

  const fetchData = () => {

    setProduct([
    //   { id: 1, name: "aaa", price: 150 },
    //   { id: 2, name: "bbb", price: 8500 },
    //   { id: 3, name: "ccc", price: 399 },
    //   { id: 4, name: "ddd", price: 12999 },
    //   { id: 5, name: "eee", price: 3999 }
      
      { id: 1, name: "aaa", price: 1000 },
      { id: 2, name: "bbb", price: 1000 },
      { id: 3, name: "ccc", price: 1000 },
      { id: 4, name: "ddd", price: 1000 },
      { id: 5, name: "eee", price: 1000 },
    ]);
  };

  return (
    <div>
      <div>Products page</div>
      <div>ข้อมูลทั้งหมด = {product.length} ; ยอดรวม = {sum.toLocaleString('th-Th',{
                minimumFractionDigits:2
              })}</div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-400">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.id}>
              <td className="px-2">{item.id}</td>
              <td className="px-2">{item.name}</td>
              <td className="px-2 text-right">{item.price.toLocaleString('th-Th',{
                minimumFractionDigits:2
              })}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr className="bg-gray-300 font-bold">
                <td className="text-center">
                    ยอดรวม
                </td>
                <td colSpan={2} className="text-right">{sum.toLocaleString('th-Th',{
                minimumFractionDigits:2
              })}</td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
}
