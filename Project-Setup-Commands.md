# Deployment

1. Modify project files as done here
2. Modify package.json as done here
3. At project root folder:

```bash
npm run build
```

4. Now

```bash
npm start
```

5. Now both our Client and Server are running on port 5000
   (as specified in .env file)

6. Now Visit: http://localhost:5000

7. Now because in <span style="color: yellow">server.js</span> we have:

```js
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
```

then any request to any paths other than

```
"/api/auth"
"/api/messages"
"/api/users"
```

will be interpreted as rendering the
<span style="color: yellow">frontend/dist/
<span style="color: orange">index.html</span></span> file.
