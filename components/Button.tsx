export default function Button(
  {label,icon}:{
    label:string
    icon:string
  }

) {
  return (
    <button className="bg-gradient-to-tr from-blue-200 to-green-200 text-white text-center px-4 py-2 rounded-md">
        <i className={`fa fa-${icon} mr-2`}></i>
        {label}
    </button>
  )
}