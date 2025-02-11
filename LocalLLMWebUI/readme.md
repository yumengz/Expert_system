https://docs.openwebui.com/getting-started/quick-start/

open docker app 

docker pull ghcr.io/open-webui/open-webui:main

docker run -d -p 3000:8080 -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main

Single-User Mode (Disabling Login)
docker run -d -p 3000:8080 -e WEBUI_AUTH=False -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main

Check Running Containers:
docker ps
Stop:
docker stop open-webui
docker rm open-webui


docker run -d -p 3000:8080 -e OLLAMA_BASE_URL=https://example.com -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main


http://localhost:3000




==> We will base on openWebUI to build our own app: https://github.com/open-webui/open-webui/tree/main