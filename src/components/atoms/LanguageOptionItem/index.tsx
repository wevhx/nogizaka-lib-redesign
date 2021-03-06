import * as React from "react";
import { Link } from "gatsby";
import styles from "./languageoptionitem.module.scss";
import { getUrlWithTrailingSlash } from "utils/strings";

interface LanguageOptionItemProps {
  to: string;
  children: React.ReactNode;
  handleClick?(): void;
}

export const LanguageOptionItem = ({
  to,
  children,
  handleClick,
}: LanguageOptionItemProps) => {
  const liProps = handleClick
    ? {
        onClick: handleClick,
      }
    : null;

  return (
    <li {...liProps}>
      <Link to={getUrlWithTrailingSlash(to)}>
        <span className={styles.text}>{children}</span>
      </Link>
    </li>
  );
};
