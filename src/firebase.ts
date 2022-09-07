//var admin = require("firebase-admin");
import { initializeApp } from "firebase-admin/app";
import { credential, ServiceAccount } from "firebase-admin";
import { enviroments } from "./config/enviroment";

const firebaseConfig = {
  type: enviroments.firebase.type,
  project_id: enviroments.firebase.project_id,
  private_key_id: enviroments.firebase.private_key_id,
  private_key: enviroments.firebase.private_key.replace(/\\n/gm, "\n"),
  client_email: enviroments.firebase.client_email,
  client_id: enviroments.firebase.client_id,
  auth_uri: enviroments.firebase.auth_uri,
  token_uri: enviroments.firebase.token_uri,
  auth_provider_x509_cert_url: enviroments.firebase.auth_provider_x509_cert_url,
  client_x509_cert_url: enviroments.firebase.client_x509_cert_url,
};

initializeApp({
  credential: credential.cert(firebaseConfig as ServiceAccount),
});
