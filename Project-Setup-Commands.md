# Connecting Frontend to Backend

## Frontend Setup

1. Installing package:

```bash
cd frontend
npm i react-hot-toast
```

<span style="font-family:Verdana; color:orange">

**Note**:
In <ins>**vite.config.json**</ins> we added a "proxy" prop.
This is only needed in development stage
to avoid the CORS error. But in production
because we are in the same domain there is
no need to do that.

</span>
