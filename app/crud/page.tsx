// //*** ส่งข้อมูลแบบ Action
// import { createProduct } from "./action"

// export default function Crud() {

//   return (
//     <div>
//     <form action={createProduct}
//         className="flex flex-col gap-2 justify-center items-center"
//         >
//         <div>Name</div>
//         <input name="name" className="input" />

//         <div>Price</div>
//         <input name="price" className="input" />

//         <div>
//             <button type="submit" className="btn">
//             <i className="fa fa-check mr-2"></i>
//             Save
//         </button>
//         </div>
//     </form>
//     </div>
//   )
// }

//*** ส่งข้อมูลแบบ Api
"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface ProductInterface {
  id:number
  name:string
  price:number
}

export default function Crud() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [products,setProducts] = useState<ProductInterface[]>([])
  const [id,setId] = useState(0)

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const url = '/api/product/list'
    const res = await axios.get(url)

    if (res.status === 200) {
      setProducts(res.data)
    }
  }

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
        name: name,
        price: price,
      };

    
    if (id === 0) {
      
      const url = "/api/product/create";

      if (price === null || typeof price !== "number" || isNaN(price)) {
        Swal.fire({
          title: "Invalid Price",
          text: "Price must be a valid number",
          icon: "error",
          timer: 3000,
        });


        return;
      } else {
        
        const response = await axios.post(url, payload);

        if (response.status === 200) {
          Swal.fire({
            title: "Save",
            text: "Success",
            icon: "success",
            timer: 3000,
          });
        }
      }

      }else {

          const url = '/api/product/update/' + id
          const response = await axios.put(url,payload)

          if (response.status === 200) {
          Swal.fire({
            title: "Update",
            text: "Update Success",
            icon: "success",
            timer: 3000,
          });
        }

          setId(0)
      }

      setName("")
      setPrice(0)
    

    fetchData()

  }
  


  // handleDelete
  const handleDelete = async (id : number) => {
    const btnDelete = await Swal.fire({
      title:'ลบรายการ',
      text:'ยืนยันการลบข้อมูล',
      icon:'question',
      showConfirmButton:true,
      showCancelButton:true
    })

    console.log('btnDelete : ' + btnDelete);

    if (btnDelete.isConfirmed) {

      console.log('id : ' + id);
      
      const url = '/api/product/delete/' + id
      await axios.delete(url)

      fetchData()
    }
  }

  // handleEdit
  const handleEdit = async (product:ProductInterface) => {
    setId(product.id)
    setName(product.name)
    setPrice(product.price)

    
  }

  

  return (
    <div>
      <form
        onSubmit={handleCreateProduct}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <div>Name</div>
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="input" />

        <div>Price</div>
        <input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="input"
        />

        <div>
          <button type="submit" className="btn">
            <i className="fa fa-check mr-2"></i>
            Save
          </button>
        </div>
      </form>

      <div>
        Products
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td className="text-right">{item.price.toLocaleString('th-Th',{minimumFractionDigits:2})}</td>
              <td className="flex justify-center gap-4">
                <div>
                  <button onClick={() => handleEdit(item)}>
                    <i className="fa fa-pencil"></i>
                  </button>
                </div>
                <div>
                  <button onClick={()=> handleDelete(item.id)}>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
