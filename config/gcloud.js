const fs = require('fs');

const gcloud = {
  type: 'service_account',
  project_id: 'dublin-coach',
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key,
  client_email: 'circle-ci@dublin-coach.iam.gserviceaccount.com',
  client_id: process.env.client_id,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://accounts.google.com/o/oauth2/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/circle-ci%40dublin-coach.iam.gserviceaccount.com',
};

const data = JSON.stringify(gcloud);
fs.writeFileSync('config/gcloud.json', data);
