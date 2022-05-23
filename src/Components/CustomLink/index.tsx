import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className={match ? 'active fw-bold' : ''} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
