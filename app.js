import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";



export const options = {
  stages: [
    { target: 100000, duration: '1m' },
    { target: 200000, duration: '1m' },
    { target: 500000, duration: '1m' },
  ],
  ext: {
    loadimpact: {
      distribution: {
        distributionLabel1: { loadZone: 'amazon:bh:bahrain', percent: 60 },
        distributionLabel2: { loadZone: 'amazon:fr:paris', percent: 15 },
        distributionLabel3: { loadZone: 'amazon:it:milan', percent: 15 },
        distributionLabel4: { loadZone: 'amazon:de:frankfurt', percent: 10 },
      },
    },
  },
};

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export default function () {
  http.get('https://ideas.media.gov.sa/');
  sleep(0.5);
}

