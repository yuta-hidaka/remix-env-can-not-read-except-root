// If I call `clientLoader` here, i can not access windows.process.env
export function clientLoader() {
  // console.log(window.process.env.foo); // process is not defined error
  // return { foo: window.process.env.foo };
  return {};
}

export default function Foo() {
  return <p>this is won't work because of clientLoader, open dev tool and type `console.log(window.process)`</p>;
}
