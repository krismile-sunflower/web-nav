import prisma from '@/lib/db';
import {NextResponse} from "next/server";
import axios from "axios";
export async function GET() {

  const res = await axios.get(
    "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true"
  );

  const data = res.data?.data;

  return NextResponse.json(data);
}
