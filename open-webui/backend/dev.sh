PORT="${PORT:-8080}"
uvicorn open_webui.main:app --port $PORT --host 0.0.0.0 --forwarded-allow-ips '*' --reload

# uvicorn open_webui.main:app --port 8080 --host 0.0.0.0 --forwarded-allow-ips '*' --reload --ssl-keyfile ssl/key.pem --ssl-certfile ssl/cert.pem

# uvicorn open_webui.main:app --host 0.0.0.0 --port 8080 \
#     --ssl-certfile /Users/wenqings/Desktop/Expert_system/open-webui/backend/ssl/cert.pem \
#     --ssl-keyfile /Users/wenqings/Desktop/Expert_system/open-webui/backend/ssl/key.pem \
#     --log-level debug