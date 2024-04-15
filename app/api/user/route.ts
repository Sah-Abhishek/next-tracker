import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient;

export async function GET() {
    const data = await client.user.findMany();
        
        // Return the fetched data as a JSON response
        return NextResponse.json(data);
}

export async function POST(req: NextRequest){
    const body = await req.json();
    //Should apply validation here
    const user = await client.user.create({
        data: {
            topic: body.topic,
            timeFrom: body.timeFrom,
            timeTo: body.timeTo,
            subtopic: body.subtopic,
            hours: body.hours
        }
    })
    console.log(body.id);
    console.log(body)

    return NextResponse.json({message: "Log added"})
}