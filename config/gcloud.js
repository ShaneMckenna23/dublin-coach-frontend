const fs = require('fs');

const gcloud = {
  type: 'service_account',
  project_id: 'dublin-coach',
  private_key_id: 'c44b81069c4999f598053dfa1d85e59c2df849ab',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+goDi2htSS1GK\nH1f9L3kgERYhngMXUO39plQJjA1wBSsn9E5nRpiUodAPzVLIaweQdL+9GUjC1rDP\npGVAKKk7UIUNwqvtwbqQSbHBOL6YrenSOR2WJWqFKq7LxcHbVc5Yo7p5oLVa7Y5u\nW4LPdteAZHj4Md0z3gpCRQiBRakEEV8gD26n5GKbcX75IEwdymKKeQ5RESSWFrt2\n3UWp9aghFwtJbO+M7ezw+O9EhcBmmqRZp7DSbzNLCUmT15udrci/jMPnG6eEBZ4O\nd0Qs1gli1iJLzbi49VO/7PDxHwv4/z54Q6GIWLawsmzgx+CFbQy03iLpnZqP5kYm\ngE8SoiSvAgMBAAECggEACLAxSjyR2r7GRmB9O0s9y2lsEyFpLlg0Wl6KXkXDBnT9\n4wcVx55PxBYzGR1kj/EC+c1mlyxUMKqTirdfyhLF+7IFjLtFla9sSjtKKNqP0AJn\nyPzDgtRMV4Flp7O/o7igk1NNjvwgzoz0nhzR9OiMayBp50Ei6kQklKF1rKuYHzAf\n89BUIqScD0JH6RcK0UXg8YotE96ldT3vUeGDrnoVI4AU9TdGNFLAIC5RxXR2nO5L\nawULAXBnSKkNRh1mIir8TPiuarmv3UbMmbyfWHE7eyiHSlVk6fPFkXqXjypNpwhn\nz1XHN7a2yGXSk7Ba4+mJ1ZZgxkc2bfZ3XgzgKNKVTQKBgQD+GFQhNOwBj1S94Mgk\n8QeENcfT3eYgTatbpIDKLKZ2IHQ1TvcQJoHDjPoFNd095s9Z/8sSR+jTAYJYmVbh\nIAyKQcSz2PhEePeWwE2hHonyaHfbXj1UVCZENe0pUx9hpjHnF6RpynJgDfbPvNA1\npnalZPwD+EFhOgsatTohthUVMwKBgQC/8COS+Pdgcdoo1LY0/rTU342AVo4o2gXi\nr3jiju5bDSL9RGa0bEPWkiNvS1Kb7sOuKnw3NA11gltr4AWCyFY+exIassgEVE1L\nDZci24qqS3c8GtRknv5aa58pLnZ7ABmZd0xF/UJ4zSLMXMZh1GBViu/AWu1443Zb\nfe4JlbP6lQKBgQD8NPW8iCUBX11DowvF7yAA0MjpuMUkpzNBIUVcZ3lKouf1yc1d\nUHtYuGOqLE7PlHuX31eXa5zjZAoXGwyrI/6OdL1jriavAErwbSwgkoll/N+K9D13\nqJba+ZPPgtwRNr8tm7/r6bAhO3sRs14PAo2dmWC0KAPtF4nSFrP+phbDFQKBgAGH\nXiErjnzcK0qr9w+Q/8u6RBxDlDpLEkTt9N6JGOjsv9yYkODbA+dPnqyiQvQvAKwA\ndqDR71GCSkwfqquSAO3aeRhxWBqAuWThpNSIPyCAHWEDLbHneksqFEh1sEfmhk2s\nn5TnIYJoz+Ak1Qeuc137D1HO55lQ5n5wEFdPM/HJAoGBALK8GweHKg8NDloACYUn\n8Fd6qdackZpIfCR+DbGyrI+HlIh1SMidzZdYaYgPyB1G+H+skf5IWW8bA9OmJDR9\nISOaGLfOgMyWwdnCFGmCvNa7nL0iZ33gscAdGbK0i6D73oaKHvKzmhqYP7376qEs\nuPuQuyPn/MIaBLQezc1IAHmj\n-----END PRIVATE KEY-----\n',
  client_email: 'circle-ci@dublin-coach.iam.gserviceaccount.com',
  client_id: '103729477085398738799',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://accounts.google.com/o/oauth2/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/circle-ci%40dublin-coach.iam.gserviceaccount.com',
};

const data = JSON.stringify(gcloud);
fs.writeFileSync('gcloud.json', data);
