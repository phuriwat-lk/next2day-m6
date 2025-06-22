import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma"

const prisma = new PrismaClient()

export async function DELETE(req:NextRequest,{params} : {params:{id:string}}) {

    try {

        const {id} = params

        await prisma.product.delete({
            where:{
                id: parseInt(id)
            }
        })

        return NextResponse.json({message:'Delete Success'})

    } catch (err) {
        console.log(err);
        return NextResponse.json({message: err})
    }

}