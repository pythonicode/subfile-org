// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

type Data = {
    created_at: number,
    id: string,
    key: string
}

type Error = {
    error: string
}

const IV_LENGTH = 16; // For AES, this is always 16
const ENCRYPTION_KEY = process.env.ESTUARY_ENCRYPTION_KEY || "0123456789abcdef0123456789abcdef"; // Must be 256 bits (32 characters)

function encrypt(input: string) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(input);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + encrypted.toString('hex');
}

function decrypt(input: string) {
    let iv = Buffer.from(input.slice(0, IV_LENGTH * 2), 'hex');
    let encryptedText = Buffer.from(input.slice(IV_LENGTH * 2), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
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
    const key = encrypt(data.uuid);
    if (decrypt(key) != data.uuid) return res.status(500).json({ error: "Failed to encrypt API key" });
    const response: Data = {
        created_at: new Date(data.createdAt).getTime(),
        id: data.uuid,
        key: key,
    }
    res.status(200).json(response)
}
