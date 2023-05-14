import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";



export const options = {
  vus: 5,
  duration: '10s',
  // ext: {
  //   loadimpact: {
  //     distribution: {
  //       distributionLabel1: { loadZone: 'amazon:bh:bahrain', percent: 50 },
  //       distributionLabel2: { loadZone: 'amazon:fr:paris', percent: 50 },
  //     },
  //   },
  // },
};

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

export default function () {
  http.get('');

}

