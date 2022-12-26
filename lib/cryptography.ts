import crypto from 'crypto'

const IV_LENGTH = 16; // For AES, this is always 16
const ENCRYPTION_KEY = process.env.ESTUARY_ENCRYPTION_KEY || "0123456789abcdef0123456789abcdef"; // Must be 256 bits (32 characters)

export function hash(input: string) {
    return crypto.createHash("sha256").update(input).digest("hex");
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(input);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + encrypted.toString('hex');
}

export function decrypt(input: string) {
    let iv = Buffer.from(input.slice(0, IV_LENGTH * 2), 'hex');
    let encryptedText = Buffer.from(input.slice(IV_LENGTH * 2), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}