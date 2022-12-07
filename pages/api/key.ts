// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    token: string,
    tokenHash: string,
    expiry: number
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const url = "https://api.estuary.tech/user/api-keys?perms=upload&expiry=720h"
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + process.env.ESTUARY_API_KEY,
        }
    })
    const data = await result.json()
    res.status(200).json({
        token: data.token,
        tokenHash: data.tokenHash,
        expiry: new Date(data.expiry).getTime()
    })
}
