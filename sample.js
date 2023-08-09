import http from 'k6/http'

import {sleep} from 'k6'

import {check} from 'k6'

 

export const options= {

    vus: 1,

    duration: '5s'

}

 

export default function () {

    const baseUrl= "https://reqres.in/"

    const endPoint= "api/users/2"

 

    const res= http.get(`${baseUrl}${endPoint}`)

    console.log(res);

    check(res, {'is status 200': (r) => r.status ===200})

    sleep(1)

}