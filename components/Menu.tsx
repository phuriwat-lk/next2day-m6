import Link from "next/link";

export default function Menu() {
  return (
    <div>
        <Link href='/'>
        <i className="fa fa-home mr-1"></i>
            Home
        </Link>
        <Link href='/counter'>
        <i className="fa fa-plus mr-1"></i>
            Counter
        </Link>
        <Link href='/about'>
        <i className="fa fa-user mr-1"></i>
            About
        </Link>
        <Link href='/product'>
        <i className="fa fa-box mr-1"></i>
            Products
        </Link>
        <Link href='/use-component'>
        <i className="fa fa-list-alt mr-1"></i>
            Use-Component
        </Link>
        
    </div>
  )
}
