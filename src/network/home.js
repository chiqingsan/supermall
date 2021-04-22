import {request} from "@/network/network";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  })
}
