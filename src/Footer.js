export function Footer({date}) {
  
  return (
    <footer className="footer">
      {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}
    </footer>
  );
}
