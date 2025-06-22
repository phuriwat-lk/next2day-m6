export default async function Info({params}:{
    params: Promise<{id:string,cattagory:string}>
}) {

    const {id,cattagory} = await params


  return (
    <>
    <div>Search-Cattagory</div>
    <hr />
    <div>id = {id}, Cattagory = {cattagory}</div>
    </>
  )
}
