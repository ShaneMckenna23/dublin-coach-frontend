const fs = require("fs");
const slashes = require("slashes");

let gcloud = {
  type: "service_account",
  project_id: "dublin-coach-123",
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key,
  client_email: "circleci@dublin-coach-123.iam.gserviceaccount.com",
  client_id: process.env.client_id,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://accounts.google.com/o/oauth2/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/circleci%40dublin-coach-123.iam.gserviceaccount.com"
};

gcloud.private_key = slashes.strip(gcloud.private_key);

const data = JSON.stringify(gcloud, null, 2);
fs.writeFileSync("config/gcloud.json", data);
