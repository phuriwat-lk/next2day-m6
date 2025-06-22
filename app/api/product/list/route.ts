import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma"

const prisma = new PrismaClient()

export async function GET() {

    try {

        const res = await prisma.product.findMany({
            orderBy: {
                id: 'desc'
            }
        })

        return NextResponse.json(res)

    } catch (err) {
        console.log(err);
        return NextResponse.json({message: err})
    }

}