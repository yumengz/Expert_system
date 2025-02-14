# UI development manual


```
cd ExpertSystemUI/package
brew reinstall icu4c
brew link icu4c --force
brew install node
npm install
npm install -g @angular/cli
ng serve
```

## 🚀 Launch the App on PC as a Server 🚀

```
brew install ngrok
ng serve --host 0.0.0.0
ngrok config add-authtoken 2sn4A0Pahj9814dmTAnVHk7jrdj_7ewKDSb8sSCwivAeLCwXb
```

### In a new terminal window, run:

```sh
ngrok http 5173
```

This will create a secure public URL that you can share. For example:

```
Forwarding                    http://abcd1234.ngrok.io -> http://localhost:4200
```

---

1. Use localtunnel (lt)
LocalTunnel is a great alternative to Ngrok that supports HTTP.

Installation

npm install -g localtunnel
Usage

lt --port 5173
This will generate a URL like http://your-subdomain.loca.lt/
Unlike Ngrok, it allows HTTP access, making it easier for your frontend to connect.



brew install cloudflare/cloudflare/cloudflared  # macOS
cloudflared tunnel --url https://localhost:5173




Fuck... All of these tunneling pretty much only support https, so for local development, I decided to deploy in https too. 

mkdir ssl
cd ssl
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt


(base) Wenqings-MacBook-Pro:ssl wenqings$ openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt
Generating a RSA private key
.........................+++++
...................................................+++++
writing new private key to 'localhost.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:Michigan
Locality Name (eg, city) []:Novi
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Shandongchengxin
Organizational Unit Name (eg, section) []:IT
Common Name (e.g. server FQDN or YOUR name) []:Yumeng Zhou
Email Address []:yumengz@umich.edu




折腾了半天，最终采用这个方案： https://medium.com/@mariovanrooij/adding-https-to-fastapi-ad5e0f9e084e
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365


openssl req -x509 -newkey rsa:4096 -nodes \
  -keyout /Users/wenqings/Desktop/Expert_system/open-webui/backend/ssl/key.pem \
  -out /Users/wenqings/Desktop/Expert_system/open-webui/backend/ssl/cert.pem \
  -days 365 -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=localhost"



openssl x509 -in ssl/cert.pem -text -noout



把原始代码调教成https需以下几步：
1.后端： main.py， dev.sh __init__.py ==> 测试跑步到这，build的时候再管
2.前端： constant.ts vite.config.ts


ok, https 问题搞定，可以本地电脑作为服务器部署咯！！！

Backend
cloudflared tunnel --url https://localhost:8080 --no-tls-verify ==> backend can be public but will not work with frontend

cloudflared tunnel --url https://localhost:8080 --origin-ca-pool /Users/wenqings/Desktop/Expert_system/open-webui/backend/ssl/cert.pem
curl -v --cacert /Users/wenqings/Desktop/Expert_system/open-webui/backend/ssl/cert.pem https://localhost:8080


获得网址 （每次都会变！）：https://represent-pets-korea-opposite.trycloudflare.com   





curl ifconfig.me
curl -4 ifconfig.me
==> 97.70.146.128


brew install certbot

sudo certbot --nginx -d 97.70.146.128
注册了一个域名： yumeng.duckdns.org
