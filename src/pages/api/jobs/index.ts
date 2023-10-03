import type { APIRoute } from "astro";
import { XataClient } from "../../../xata";

const client = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
export async function GET() {
    try {
        const jobs = await client.db.job.getAll();
        return new Response(
            JSON.stringify(jobs), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
        });
    } catch (error) { }
}

export const POST: APIRoute = async ({ request }) => {
    const job = await request.json();
    const creatjobs = await client.db.job.create(job);
    return new Response(
        JSON.stringify(creatjobs), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
    });

}