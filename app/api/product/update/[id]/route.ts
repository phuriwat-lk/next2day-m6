import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma"

const prisma = new PrismaClient()

export async function PUT(req:NextRequest,{params}:{params:{id:string}}) {

    try {

        const {id} = params
        const {name,price} = await req.json()

        await prisma.product.update({
            where:{
                id: parseInt(id)
            },
            data:{
                name:name,
                price:price
            }
        })

        return NextResponse.json({message:'Update Success'})

    } catch (err) {
        console.log(err);
        return NextResponse.json({message: err})
    }

}