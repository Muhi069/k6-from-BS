import {check, sleep} from 'k6';
import exec from "k6/execution";
import http from "k6/http";

// export const users = JSON.parse(open("data.json"))


export const options = {
    scenarios: {
        // accountCreate: {
        //     executor: "per-vu-iterations",  //  per vus iteration equally divide kore niye execute korbe. 
        //     vus: 5,
        //     iterations: 10
        // },
        accountCreate2: {
            executor: "shared-iterations",  // ekhane time matter kore na. joto fast work done hobe toto valo 
            vus: 3,
            iterations: 10
        },
        // accountCreate3: {
        //     executor: "constant-vus", // number of vus is fixed, duration matters
        //     vus: 10,
        //     duration: '10s'
        // },
        // accountCreate4: {
        //     executor: "ramping-vus",  // 1ta fixed time por vus barbe and fixed time pore gracefully vus kome jabe.
        //     startVUs: 0,
        //     stages: [
        //         {duration: '20s', target: 10},
        //         {duration: '30s', target: 10},
        //         {duration: '0s', target: 0},
        //     ],
        //     gracefulRampDown: '30s'
        // }

    }
}
export default function () {
    console.info(`Iterations id ==>  ${exec.scenario.iterationInTest} VU id ==> ${exec.vu.idInTest}`);
    const baseUrl = "https://reqres.in/"
    const endPoint = "api/users/2";

    const res = http.get(`${baseUrl}${endPoint}`);
    check(res, {'is status 200': (r) => r.status === 200});
    sleep(1);
}
