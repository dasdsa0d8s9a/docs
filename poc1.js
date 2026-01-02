fetch("https://id-sg.oppo.com/uc/web/v1/user-info/update-basic-info", {
  "method": "POST",
  "credentials": "include",
  "headers": {
    "X-Web-Client-Type": "pc",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua": "\"Google Chrome\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
    "X-Timezone": "GMT+1",
    "X-RequestTime": "1767368820720",
    "sec-ch-ua-mobile": "?0",
    "X-Sign-Key": "4iAEb620alQ8s8c8ss8o0K8sS",
    "X-Biz-AppKey": "TZeSXfQXxrCyjhvARaVrmw",
    "X-App-FromHT": "false",
    "X-Envelope-Version": "V1",
    "X-App-DeviceId": "4e841389278f55523ec33b064e668804",
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json;charset=UTF-8",
    "X-Device-Brand": "OPPO",
    "X-App-OverseaClient": "true",
    "X-App-AcAppKey": "CuGsbe6HdAe6vDBHFew2Di",
    "Accept-Language": "en-US",
    "X-Device-ClientType": "WEB",
    "X-Sign": "/xt7u5dQhfsUfY2EeY+vcumQW1I=",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
    "Origin": "https://id.oppo.com",
    "Referer": "https://id.oppo.com/"
  },
  "body": "\"O+oXlMtc8EwUDyrKw5Wk5Cd34L32ZpO7Q4O2kzpgcslaxwFLhUwHoke8SydcUhl1maWEeNTvPPOZ4bkvkAvjrbw4Kc7KZe3mxMD3Zht0aQWQkSUkssk4wui7AgliTs1RO3JH/lcKySGStCoXh5nov4bqxkwaZGfZtZq5KWj/zVU=.57TjUC6EOf/roQJiSxb2kfefDGc2pv6QthCbQaDIH7rTKHdlxwDlkpxyx61Q7Et8jQ20EMR2rKPMRB9EBPwi7tBUslZ3/8v2g/cp+eIV8nTj6gteaugW/wN+R9E4oDFP7r365emckFkXwno5slF8vqpS4bK/PfLDDeZDf4Gj6VQ=.hEN97gUKH2PAw6aEskuM1S6LqsDRS4rpGA==\""
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
