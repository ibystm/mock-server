import crypto from "crypto";

const SECRET = "IBYSTM-MOCK_API";

export const random = () => crypto.randomBytes(126).toString("base64");

export const authentication = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
