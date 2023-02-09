export default function Layout({ children }) {
  return (
    <>
      <div> header</div>
      <main>{children}</main>
      <div> footer</div>
    </>
  );
}
