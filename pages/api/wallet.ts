// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { hash } from '@/lib/cryptography'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    created_at: number,
    id: string,
    key: string
}

type Error = {
    error: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    const url = "https://api.estuary.tech/collections/";
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + process.env.ESTUARY_API_KEY,
        },
        body: JSON.stringify({
            description: 'A collection for an anonymous subfile user.',
            name: 'Subfile'
        })
    });
    if (result.status !== 200) return res.status(500).json({ error: "Failed to get API key" })
    const data = await result.json()
    const key = hash(data.uuid);
    const response: Data = {
        created_at: new Date(data.createdAt).getTime(),
        id: data.uuid,
        key: key,
    }
    res.status(200).json(response)
}
