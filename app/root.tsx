import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";

export async function loader() {
  const ENV = {
    NODE_ENV: process.env.NODE_ENV,
    TZ: process.env.TZ,
  };

  return json({ ENV });
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  console.log("env data is here: ", data.ENV);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>this is root.tsx</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.process = ${JSON.stringify({
              env: data.ENV,
            })}`,
          }}
        />
        <div>
          <Link to="/foo-can-read-window-process">
            Go to /foo-can-read-window-process via Link component // this will
            got an error
          </Link>
        </div>
        <div>
          <Link to="/foo-can-not-read-window-process">
            Go to /foo-can-not-read-window-process via Link component // this
            will got work
          </Link>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
