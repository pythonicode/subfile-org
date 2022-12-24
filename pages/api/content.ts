// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    token: string,
    tokenHash: string,
    expiry: number
}

type Error = {
    error: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    if (req.method == "DELETE") {
        const col_id = req.body.id;
        const url = `https://api.estuary.tech/collections/${col_id}/contents`;
        const result = await fetch(url, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + process.env.ESTUARY_API_KEY,
            },
            body: JSON.stringify({
                "by": req.body.by || "path",
                "path": req.body.path || ""
            })
        });
        console.log(result.json());
        if (result.status !== 200) return res.status(500).json({ error: "Failed to get API key" })
        const data = await result.json()
        res.status(200).json({
            token: data.token,
            tokenHash: data.tokenHash,
            expiry: new Date(data.expiry).getTime()
        })
    } else res.status(405).json({ error: "Method not allowed" });
}