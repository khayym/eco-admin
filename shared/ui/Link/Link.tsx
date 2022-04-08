import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { LinkContainer } from './Link.Styled';

interface OnlyClassNameInterface
  extends React.FC<{
    className?: string;
    hrefName: string;
    href: string;
    defaulted?: string;
    children: string | ReactNode;
  }> {}

export const CustomLink: OnlyClassNameInterface = ({
  children,
  hrefName,
  href,
}) => {
  const { pathname } = useRouter();
  const activeLink = (
    url: string,
    pathname: string,
    defaulted?: string
  ): string => {
    return pathname === url ? 'true' : 'false';
  };

  return (
    <LinkContainer
      activeLink={activeLink(pathname, `/${hrefName?.toLowerCase()}`)}
    >
      <Link href={href} passHref>
        <div>
          <span className="icon-span">{children}</span>
          <span className="link-text-span">{hrefName}</span>
        </div>
      </Link>
    </LinkContainer>
  );
};
