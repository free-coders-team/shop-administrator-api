import { initializeApp } from "firebase-admin/app";
import { credential, ServiceAccount } from "firebase-admin";

import {
  FIREBASE_API_KEY,
  FIREBASE_CLIENT_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID,
} from "./enviroment";

const firebaseConfig = {
  type: "service_account",
  api_key: FIREBASE_API_KEY,
  client_id: FIREBASE_CLIENT_ID,
  project_id: FIREBASE_PROJECT_ID,
  private_key_id: FIREBASE_PRIVATE_KEY_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_email: "firebase-adminsdk-70wev@shop-administration.iam.gserviceaccount.com",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-70wev%40shop-administration.iam.gserviceaccount.com",
  private_key:
    `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7OhSsM8GNHGuw\ncRVkjSaSUUiOfEN/VDeEYzfXOnU/iI/G0QKTY1jfdLpHGROD5og88477sq8SNQNE\na6UjTJ9h/4jfU5gVziDGBj34bdOZn5hFZdnpWP3hnDsniNNY0jqEtOYKUxO+z7kJ\nGK2slahj2/Krmf3RWKjPKrOWaGEI7QOUMOK9A4xnIc8jXAMmnZ6GRrmxbE5FxpRq\nJSfHfLFCHTGiecyKfl2jqlgkWLMhIUK4zPtKitDCTiPWjm1q+/fzz6hRjIxxpu1s\nCqpbE7VAuNzMzCYLNrxD+PA/68G4tcbayd5b17f/M+3lsNMNmtzVDLl8jrs1oVN7\ndW+X/mUNAgMBAAECggEABLER2W/2zsBGElipUtqsNCiOSWfHNXMgF3g/6whNtNxe\ns8GRaFg4QoYhzRbbuQ6a5X5WhqR8sklh6L6EtCSw5uJhzBA1e5tKH7w7TvwC5wur\ngDokG6B2b1WcTMNDmseyT9GTj7jIc9SvvdgAhwg9REkfUuvbykDPApJwpGsUME2H\nUaHCcxPrAll1dyCbei8pvm2k9v15Kmtw4A4/CQZBcHJXL9rtGJu5nfg8gONSqG/b\nhDxedCirnqW8JpzVhUSx69T4akoDcFCzoAxOumRc1zE6LMCwH3Bclt+cs9lBJq8k\n8KpF0vlTkUajzwUT7uGCR9Enim+ZOVddsDI8u0nqXwKBgQD711eCr2U4S0vtBfmy\nKYMySuVZ1e80Eycg4kqz/CRwRwIzoULM2UQafj34zrcW0NaWsEINysCzit4QLprS\nXqJvSjD2GFJS2lfNzeS8XibaeVFcnZn6GmZEnXAAJ8GOSNqQofnXc5T8vSIJ3E28\nDe7SWIO4oeAOiQzjafB0jcwolwKBgQC+UZUCOIhK3rwu321kweg7TArcG7ZxONdr\nKCzmNBYLcFhRucTgHvp4yD8i7bP4r0OfDgH5V4A58/s0wuDIrfBWJyWkWl0AvQ2/\n1U5Pzo/7hc+kLb7C2TEts0S4KknT1uZLbOvwpaieiLZZc2mcCn0jjvlSC6aLNCgG\ny7R7z5RP+wKBgQDKK4YZ6DnmpjOudGSODNtAjXVu19ouQM3hjSgRMvIBnE99KRDa\nJ/SPHBcd3LyIOWB7GcX9Em399BXugatSBBx8IOALP10fHB7unUHpod+o9UlGg1Jv\nv6+nl4eo6EFuureS8iUCO8w31JE1v0A8HidBf0NG/dRDduv8yDf7KTXiwwKBgQCF\n+bpS2OchBZEl0gUZU+OespZGgn+5TpFfDuYkm/AU115lEchFGamrExRXC0yRORf6\nRQsgsvdCVL23U6SXwNKaY259N1uXJH8kVw2M4tW682TLp6RNWEXlbPhoSOS16uct\nm5ywSH3eNFFhwPxMa5nSSVi76BWykuHGfuor6mH2twKBgFBfTJUgql++iVAxSX7T\ns05w0ieafpYXkPzw0ckeObnTmzkfml0WnPzfU6U1SRzF7O61QGsp8WLZ3mB2im/9\nil/9qo02/B0aCI8e5byimo2ZfB6LDhN1vDP1qRiig3UqkplJOqvgp7HMEAa5yTMA\nsSEQfPj3p6lyUiC252FaQa/W\n-----END PRIVATE KEY-----\n`.replace(
      /\\n/gm,
      "\n"
    ),
};

export const app = initializeApp({
  credential: credential.cert(firebaseConfig as ServiceAccount),
});
