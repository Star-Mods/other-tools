import {GoogleDriveAPI} from "../files.js";


let data = {
    "client_id": "000000000000-00000000000000000000000000000000.apps.googleusercontent.com",
    "project_id": "heroes-of-the-strife",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "000000-000000000000000-000000000000",
    "redirect_uris": [
      "http://localhost"
    ]
}



let client = new GoogleDriveAPI()
let url = client.getAuthorizeUrl()
console.log(url)


let codeUrl = `http://localhost:3131/?code=4/0000000000000000000000000000000000000000-000000000000000000000000000000&scope=https://www.googleapis.com/auth/drive.file`

let r = await client.getCredetialsFromAuthCallbackURL(codeUrl)
console.log(r)
