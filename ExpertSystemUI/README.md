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
ngrok http 4200
```

This will create a secure public URL that you can share. For example:

```
Forwarding                    http://abcd1234.ngrok.io -> http://localhost:4200
```

---

## 📁 Project Structure

- The **entry point** of the app is `app.component.ts` and its associated HTML file `app.component.html`.
- The content displayed is determined by `app.routes.ts` and `pages.routes.ts`.
- **Default home page:** `pages/starter/starter.component.html` → All dashboard-related components.

---
