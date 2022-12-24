// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any;

type Error = {
    error: {
        code: number,
        reason: string,
        details: string
    } | string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    if (req.method == "DELETE") {
        const col_id = req.query.coluuid;
        const col_key = req.headers.key;
        const url = `https://api.estuary.tech/collections/${col_id}/contents`;
        const result = await fetch(url, {
            method: 'DELETE',
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + process.env.ESTUARY_API_KEY,
            },
            body: JSON.stringify({
                "by": "path",
                "value": req.query.dir
            })
        });
        const data = await result.json()
        if (result.status !== 200) return res.status(500).json(data);
        res.status(200).json(data);
    } else res.status(405).json({ error: "Method not allowed" });
}